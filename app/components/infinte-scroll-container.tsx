import { useInView } from "react-intersection-observer";

type InfiniteScrollProps = {
	children: React.ReactNode;
	onBottomReached: () => void;
	className?: string;
};

export default function InfiniteScrollContainer({
	children,
	className,
	onBottomReached,
}: InfiniteScrollProps) {
	const { ref } = useInView({
		rootMargin: "10px",
		onChange: (inView) => {
			if (inView) {
				onBottomReached();
			}
		},
	});
	return (
		<div className={className}>
			{children}
			<div ref={ref} />
		</div>
	);
}
