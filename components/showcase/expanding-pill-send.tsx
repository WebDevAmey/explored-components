export function ExpandingPillSend() {
  return (
    <button
      type="button"
      className="group relative flex h-[2.9rem] w-[8.5rem] cursor-pointer items-center overflow-hidden rounded-full bg-[#16161a] p-2 shadow-[inset_1px_2px_5px_rgba(0,0,0,0.5)] transition-colors duration-700 ease-[cubic-bezier(0.51,0.026,0.368,1.016)] hover:bg-[#dff5ee]"
    >
      <span className="absolute inset-1 flex items-center justify-end">
        <span className="w-0 transition-[width] duration-[0.9s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:w-full" />
        <span className="flex aspect-square h-full flex-shrink-0 items-center justify-center rounded-full bg-[#17d3b0] shadow-[inset_1px_-1px_3px_rgba(0,0,0,0.6)] transition-[background-color,border-radius] duration-[0.9s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:rounded-[30%] group-hover:bg-[#0b0b0d]">
          <svg
            className="h-3 w-3 text-[#0b0b0d] transition-[color,transform,rotate] duration-[0.9s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:rotate-90 group-hover:text-[#dff5ee]"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
            />
          </svg>
        </span>
      </span>
      <span className="relative z-10 flex h-full items-center pl-[2.8rem] pr-[1.8rem] text-sm font-semibold leading-none text-[#f0f0f0] transition-[color,padding] duration-[0.9s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] group-hover:text-[#0b0b0d]">
        Send
      </span>
    </button>
  );
}
