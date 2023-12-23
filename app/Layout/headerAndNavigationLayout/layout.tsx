import HeaderComponent from "@/components/headerComponent";
import Navbarofwhatsapp from "@/components/navBarComponent/Navbarofwhatsapp";

export default function NavigationLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-[#232D36] p-4 fixed w-full z-[300px] ">
        <HeaderComponent title="Whatsapp clone" />
        <Navbarofwhatsapp />
      </div>
      {children}
    </section>
  );
}
