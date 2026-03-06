export default function Button({
  children,
  type = "button",
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return <button type={type}>{children}</button>;
}
