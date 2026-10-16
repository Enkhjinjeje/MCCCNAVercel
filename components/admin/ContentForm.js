import { slugify } from "../../lib/validation.mjs"
import styles from "../../styles/admin.module.css"

export default function ContentForm({ section, editor, setEditor, busy, save, upload }) {
  const field = (name, label, options = {}) => (
    <label>
      {label}
      <input
        {...options}
        value={editor[name]}
        onChange={(e) => setEditor({ ...editor, [name]: e.target.value })}
      />
    </label>
  )
  return (
    <section className={styles.panel}>
      <h2>
        {editor.id ? "Edit" : "Add"} {section === "events" ? "event" : "program"}
      </h2>
      <form className={styles.form} onSubmit={save}>
        <fieldset disabled={busy} style={{ display: "contents" }}>
          <label>
            Title
            <input
              required
              maxLength={500}
              value={editor.title}
              onChange={(e) =>
                setEditor({
                  ...editor,
                  title: e.target.value,
                  ...(!editor.id && editor.slug === slugify(editor.title)
                    ? { slug: slugify(e.target.value) }
                    : {}),
                })
              }
            />
          </label>
          {field("slug", "URL name", {
            required: true,
            maxLength: 200,
            pattern: "[a-z0-9]+(-[a-z0-9]+)*",
          })}
          <p className={styles.muted}>
            Use lowercase letters, numbers, and hyphens. Changing an existing event URL will change
            its public link.
          </p>
          {section === "events" && (
            <div className={styles.grid}>
              {field("date", "Display date", { placeholder: "June 8–9, 2027", maxLength: 200 })}
              {field("year", "Event year", {
                type: "number",
                required: true,
                min: 1900,
                max: 2200,
              })}
              {field("starts_at", "Start date & time (your local time)", {
                type: "datetime-local",
              })}
              {field("time", "Time", { maxLength: 200 })}
              {field("location", "Location", { maxLength: 500 })}
            </div>
          )}
          <label>
            Description
            <textarea
              required
              maxLength={20000}
              value={editor.description}
              onChange={(e) => setEditor({ ...editor, description: e.target.value })}
            />
          </label>
          <label>
            Additional details
            <textarea
              maxLength={50000}
              value={editor.details}
              onChange={(e) => setEditor({ ...editor, details: e.target.value })}
            />
          </label>
          <label>
            Photo
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={upload} />
          </label>
          <p className={styles.muted}>
            JPG, PNG, or WebP, up to 10 MB. Uploaded photos are publicly accessible.
          </p>
          {editor.image && (
            <img className={styles.preview} src={editor.image} alt="Selected content photo" />
          )}
          <button
            type="button"
            className={styles.secondary}
            onClick={() => setEditor({ ...editor, image: "/placeholder.svg" })}
          >
            Remove photo from this item
          </button>
          {field("sort_order", "Display order", { type: "number", min: -100000, max: 100000 })}
          <label className={styles.check}>
            <input
              type="checkbox"
              checked={editor.published}
              onChange={(e) => setEditor({ ...editor, published: e.target.checked })}
            />
            Published on the website
          </label>
          {section === "events" && (
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={editor.registration_open}
                onChange={(e) => setEditor({ ...editor, registration_open: e.target.checked })}
              />
              Accept event registrations
            </label>
          )}
          <div className={styles.actions}>
            <button type="submit">{busy ? "Saving…" : "Save changes"}</button>
            <button
              type="button"
              className={styles.secondary}
              onClick={() => {
                if (window.confirm("Discard your unsaved changes?")) setEditor(null)
              }}
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}
