import HeaderComponent from "@/components/headerComponent";
import Navbarofwhatsapp from "@/components/navBarComponent/Navbarofwhatsapp";

export default function NavigationLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <HeaderComponent title="Whatsapp clone" />
        <Navbarofwhatsapp />
      </div>
      {children}
    </section>
  );
}
