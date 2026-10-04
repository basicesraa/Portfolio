type ContactLinkProps = {
  label: string;
  detail: string;
  href: string | null;
  icon: "in" | "wa" | "gh";
};

function ContactIcon({ name }: { name: ContactLinkProps["icon"] }) {
  if (name === "in") return <span className="contact-icon contact-icon--letters" aria-hidden="true">in</span>;
  if (name === "wa") {
    return (
      <svg className="contact-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M26 15.5a10 10 0 0 1-14.8 8.7L6 26l1.8-5A10 10 0 1 1 26 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12.2 11.9c.3-.6.6-.6 1-.6h.6c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.6 1.1 1.5 2 2.7 2.5.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.7-.1l1.9.9c.3.1.4.3.4.5-.1 1.2-.8 2-1.9 2.3-1 .3-2.4-.1-4.3-1.2-2.4-1.4-3.9-3.5-4.2-4.8-.4-1.4.3-2.5 1.2-2.8Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className="contact-icon contact-icon--github" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.4 3.8 1.8.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.2-5.2-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.5 10.5 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.2 5.5.4.3.8 1 .8 2v2.4c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export function ContactLink({ label, detail, href, icon }: ContactLinkProps) {
  const content = (
    <>
      <span className="contact-link__icon"><ContactIcon name={icon} /></span>
      <span className="contact-link__text"><strong>{label}</strong><small>{detail}</small></span>
      <span className="contact-link__end" aria-hidden="true">{href ? "↗" : "URL to add"}</span>
    </>
  );

  return href ? (
    <a className="contact-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label}: ${detail}; opens in a new tab`}>
      {content}
    </a>
  ) : (
    <div className="contact-link contact-link--pending" aria-label={`${label} link placeholder; add the URL in the project data`}>
      {content}
    </div>
  );
}
