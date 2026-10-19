"use client";

import { FormEvent } from "react";

const tripFields = [
  ["name", "Name", "text", true],
  ["country", "Country", "text", true],
  ["email", "Email", "email", true],
  ["whatsapp", "WhatsApp", "tel", false],
  ["travelDates", "Travel dates", "text", false],
  ["travellers", "Number of travellers", "number", false],
] as const;

const tradeFields = [
  ["name", "Name", "text", true],
  ["company", "Company", "text", true],
  ["country", "Country", "text", true],
  ["email", "Business email", "email", true],
  ["website", "Company website", "url", false],
  ["markets", "Markets you serve", "text", false],
] as const;

export default function EnquiryForm({ trade = false, initialJourney = "", journeyOptions = [] }: { trade?: boolean; initialJourney?: string; journeyOptions?: string[] }) {
  const fields = trade ? tradeFields : tripFields;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = Array.from(formData.entries())
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key.replace(/([A-Z])/g, " $1")}: ${value}`)
      .join("\n");
    const subject = trade ? "B2B partnership enquiry" : "Plan my private Pakistan journey";
    window.location.href = `mailto:info@explorekarakuram.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-grid">
        {fields.map(([name, label, type, required]) => (
          <label key={name}><span>{label}{required ? " *" : ""}</span><input name={name} type={type} required={required} min={type === "number" ? 1 : undefined} /></label>
        ))}
        {!trade && (
          <>
            <label className="form-wide"><span>Selected journey</span><select name="journey" defaultValue={initialJourney}><option value="">Choose a journey</option>{journeyOptions.map((journey) => <option value={journey} key={journey}>{journey}</option>)}</select></label>
            <label><span>Destination / region</span><input name="destination" type="text" /></label>
            <label><span>Type of experience</span><select name="experience"><option value="">Select</option><option>Culture & Heritage</option><option>Adventure & Nature</option><option>Trekking & Hiking</option><option>Mountain Expedition</option><option>Road Trip & 4x4</option><option>Family / Private Tour</option><option>Photography</option></select></label>
            <label><span>Travel style</span><select name="travelStyle"><option value="">Select</option><option>Comfortable</option><option>Premium</option><option>Active</option><option>Expedition</option></select></label>
            <label><span>Approximate budget</span><input name="budget" type="text" placeholder="Per person or total" /></label>
            <label className="form-wide"><span>Special interests</span><input name="specialInterests" type="text" /></label>
          </>
        )}
        {trade && <label className="form-wide"><span>Services required</span><input name="services" type="text" placeholder="FIT, groups, logistics, white-label services…" /></label>}
        <label className="form-wide"><span>{trade ? "Tell us about the partnership or proposal" : "Message"}</span><textarea name="message" rows={6} required /></label>
      </div>
      <div className="form-submit-row">
        <p>Your details are prepared for a direct email to our Pakistan-based team.</p>
        <button type="submit">{trade ? "Request a B2B proposal" : "Send your enquiry"} <span>↗</span></button>
      </div>
    </form>
  );
}
