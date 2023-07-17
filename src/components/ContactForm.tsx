import { useForm, ValidationError } from "@formspree/react";
import { useAppContext } from "../contexts/AppContext";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwkdpenk");
  const { isDarkMode } = useAppContext();

  const reloadWindow = () => {
    window.location.reload();
  };
  if (state.succeeded) {
    return (
      <div
        className="successModal"
        style={{
          backgroundColor: isDarkMode ? "#060c0f" : "#fff",
          boxShadow: isDarkMode
            ? "2px 3.464px 7px 0px rgba(255, 255, 255, 0.101)"
            : "2px 3.464px 7px 0px rgba(0, 0, 0, 0.101)",
        }}
      >
        <h4 className="text-success">Success ✔</h4>
        <p>Message sent. I will reply shortly.</p>
        <button
          className="button"
          style={{
            backgroundColor: isDarkMode ? "var(--cyan)" : "var(--secondary)",
            color: isDarkMode ? "var(--black)" : "var(--white)",
          }}
          onClick={reloadWindow}
        >
          Return
        </button>
      </div>
    );
  }
  return (
    <form
      action="https://formspree.io/f/xyyvegpn"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          name="First name"
          placeholder="Your First Name"
          required
          aria-describedby="input first name"
          autoComplete="off"
          style={{
            borderBottom: isDarkMode
              ? "1px solid var(--cyan)"
              : "1px solid var(--secondary)",
          }}
        />
        <input
          type="text"
          name="Last name"
          placeholder="Your Last Name"
          required
          aria-describedby="input last name"
          autoComplete="off"
          style={{
            borderBottom: isDarkMode
              ? "1px solid var(--cyan)"
              : "1px solid var(--secondary)",
          }}
        />
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            aria-describedby="input e-mail address"
            autoComplete="off"
            style={{
              borderBottom: isDarkMode
                ? "1px solid var(--cyan)"
                : "1px solid var(--secondary)",
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div>
        <textarea
          name="message"
          rows={7}
          placeholder="Your message"
          required
          style={{
            border: isDarkMode
              ? "1px solid var(--cyan)"
              : "1px solid var(--secondary)",
          }}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        className="button"
        style={{
          color: isDarkMode ? "var(--black)" : "var(--white)",
          backgroundColor: isDarkMode ? "var(--cyan)" : "var(--secondary)",
        }}
      >
        Send Message
      </button>
    </form>
  );
}
