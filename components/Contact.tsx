import Reveal from "./Reveal";
import { profile, socials } from "@/lib/data";

export default function Contact() {
  return (
    <Reveal id="contact" className="section contact">
      <div className="wrap">
        <h2 className="display">
          Mari Membangun
          <br />
          Sesuatu Bersama
        </h2>
        <a href={`mailto:${profile.email}`} className="btn primary">
          {profile.email}
        </a>
        <div className="socials">
          {socials.map((social) => (
            <a href={social.href} key={social.label}>
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
