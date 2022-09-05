import { FavoriteItemLists } from "../components/pagesComponents/favoriteItemList"
import { ShopCart } from "../components/shopCart"

export const Favorites: React.FC = () => {
	return (
		<>
			<main>
				<div className="container">
					<FavoriteItemLists />
				</div>
			</main>
			<ShopCart />
		</>
	)
}
