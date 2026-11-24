import Keypad from "#/components/keypad";
import Screen from "#/components/screen";

export default function App() {
	return (
		<main className="flex flex-col gap-4 p-4 bg-grey-050">
			<div className="flex flex-col gap-4" style={{"background": "#ddecff", "padding": "20px", "borderRadius":"10px"}}>
				<Screen />
				<Keypad />
			</div>
		</main>
	);
}
