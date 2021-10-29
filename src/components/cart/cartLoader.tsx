
import ContentLoader from "react-content-loader"
import s from "../../styles/cart.module.scss";

const Loader = () => (
    <div className={s.loader}>
        <div className={s.loader__padding}>
            <ContentLoader 
            speed={2}
            width={150}
            height={187}
            viewBox="0 0 150 187"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
            <rect x="0" y="102" rx="3" ry="3" width="150" height="15" /> 
            <rect x="-1" y="121" rx="3" ry="3" width="93" height="15" /> 
            <rect x="0" y="163" rx="8" ry="8" width="80" height="24" /> 
            <rect x="115" y="156" rx="8" ry="8" width="32" height="32" />
            </ContentLoader>
        </div>
    </div>
)
export const CartLoader = () => {
    const arr = ["a","b","c","d","e","f","g"] 
    return (
        <>
        {arr.map(item=><Loader key={item}/>)}
        </>
    )
}