import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platformId: number) => void;
	selectedPlatform: number | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error } = usePlatforms();
	const { data: platforms } = usePlatforms();

	const platformName = platforms?.results.find(
		(platform) => platform.id === selectedPlatform
	);


	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platformName?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform.id)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
