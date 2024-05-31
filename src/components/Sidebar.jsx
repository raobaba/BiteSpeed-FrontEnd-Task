import { useEffect, useState } from "react";

const Sidebar = () => {
  // State to control the visibility of the usage information
  const [showUsage, setShowUsage] = useState(true);

  // useEffect hook to hide the usage information after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUsage(false);
    }, 5000);
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Conditional class to control the display of the usage information
  const displayUsage = showUsage ? "" : "hidden";

  // Function to handle the drag start event for nodes
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  // Render the Sidebar component
  return (
    <div className="h-full border border-slate-700">
      {/* Usage information displayed on first load */}
      <div class={`${displayUsage} rounded-lg p-4 m-2 text-black bg-gray-200 inline-block`}>
        Drag the node below to the pane on the left to add new nodes.
      </div>

      <aside className="p-3 text-sm text-slate-950 bg-white flex">
        {/* Draggable node */}
        <div
          className=" rounded p-2 text-base font-medium border border-slate-700 text-black-600 cursor-grab transition-colors duration-200 flex justify-center items-center flex-col w-24"
          onDragStart={(event) => onDragStart(event, "default")}
          draggable
        >
          <span
            className="material-symbols-outlined"
            style={{ paddingBottom: 5 }}
          >
            maps_ugc
          </span>
          Message
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
