import clsx from "clsx";
import { useCalculator } from "#/state";

export default function RadDegToggle() {
	const { angleUnit, degsOn, radsOn } = useCalculator();

	return (
		<div
			className={clsx(
				"absolute top-1 left-1",
				"h-10",
				"border border-blue-border",
				"divide-x divide-abi-dgrey",
				"rounded-md",
				"flex items-center",
			)}
		>
			<button
				onClick={radsOn}
				disabled={angleUnit === "rad"}
				className={clsx(
					"text-[16px] key",
					"h-full px-3",
					"rounded-l-md transition-all",
					angleUnit === "rad"
						? "bg-rad-deg-active border-blue-border text-black"
						: "bg-rad-deg-inactive border-blue-border",
				)}
			>
				Rad
			</button>
			<button
				onClick={degsOn}
				disabled={angleUnit === "deg"}
				className={clsx(
					"text-[16px] key",
					"h-full px-3",
					"rounded-r-md transition-all",
					angleUnit === "deg" ? "bg-rad-deg-active border-blue-border text-black" : "bg-rad-deg-inactive",
				)}
			>
				Deg
			</button>
		</div>
	);
}
