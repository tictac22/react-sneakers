import { useAppDispatch } from "../../redux/hooks";
import { checkMenu } from "../../redux/slicers/menu";
import s from "../../styles/shopcart.module.scss";
interface Props {
    title:string,
    imgUrl:string,
    text:string,
    isGreen:boolean
}
export const EmptyCart:React.FC<Props> = ({title,imgUrl,text,isGreen}) => {
    const dispatch = useAppDispatch();
    const backTo = () => {
        dispatch(checkMenu(false))
    }
    return (
        <div className={s.empty}>
            <div className={s.empty__inner}>
                <div className={s.empty__img}>
                    <img src={`/images/${imgUrl}.jpg`} alt="jpg"></img>
                </div>
                <h4 className={`${s.empty__title} ${isGreen ? s.empty__title__green : ""}`}>
                {title}
                </h4>
                <p className={s.empty__text}>
                {text}
                </p>
                <button onClick={backTo} className={`${s.empty__btn} btn`}><img src="/svg/arrow.svg"/> Вернуться назад</button>
            </div>
        </div>
    )
}