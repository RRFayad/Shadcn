import MenuTitle from "./menu-title";

function MainMenu() {
  return (
    <div className="overflow-auto bg-muted p-4">
      <div className="border-b border-b-zinc-300 pb-4 dark:border-b-black">
        <MenuTitle />
      </div>
    </div>
  );
}

export default MainMenu;
