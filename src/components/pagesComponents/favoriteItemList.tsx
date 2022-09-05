import { Link } from "react-router-dom"
import { useAppSelector } from "../../redux/hooks"
import s from "../../styles/favorite.module.scss"
import { Cart } from "../cart"

export const FavoriteItemLists = () => {
	const { favoritesItems } = useAppSelector((state) => state.shop)

	if (favoritesItems.length === 0) return <EmptyFavorites />
	return (
		<div className="grid" style={{ justifyContent: "initial" }}>
			{favoritesItems.map((item) => (
				<Cart key={item.id} {...item} />
			))}
		</div>
	)
}

const EmptyFavorites = () => (
	<div className={s.empty}>
		<div className={s.empty__smile}>
			<img src="/images/smile.png" alt="smile" />
		</div>
		<h2 className={s.empty__title}>No bookmarks :(</h2>
		<p className={s.empty__text}>You haven't bookmarked anything</p>
		<Link to="/" className={`${s.empty__btn} btn`}>
			<img src="/svg/arrow.svg" />
			<p>Go back</p>
		</Link>
	</div>
)
