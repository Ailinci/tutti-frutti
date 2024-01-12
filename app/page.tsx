import { Name } from "@/components/name";
import { title } from "@/components/primitives";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Jugá al&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Tutti-Frutti&nbsp;</h1>
				<br />
				<h1 className={title()}>
					con amigos online.
				</h1>
				<Name/>
			</div>
		</section>
	);
}
