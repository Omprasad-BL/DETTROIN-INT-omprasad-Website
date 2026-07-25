// src/components/ui/Section.jsx
export default function Section({ id, className = "", children }) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 w-full ${className}`}
    >
      {children}
    </section>
  );
}