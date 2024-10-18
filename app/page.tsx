import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/switchBtn/SwitchBtn";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        <ModeToggle/>
        <Button size={"lg"} className=" bg-destructive" variant={"default"}>Joe Segan</Button>
      </main>
    </>
  );
}
