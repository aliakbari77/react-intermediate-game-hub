import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import {Outlet} from "react-router-dom";

function App() {
	return (
		<>
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "250px 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar/>
			</GridItem>
			<Outlet/>
		</Grid>

		</>
	);
}

export default App;
