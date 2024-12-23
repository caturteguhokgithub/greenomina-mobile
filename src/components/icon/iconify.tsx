import { Icon } from "@iconify/react";

export default function Iconify({
  name,
  height,
}: {
  name: string;
  height?: number;
}) {
  return <Icon icon={name} height={height || 18} />;
}
