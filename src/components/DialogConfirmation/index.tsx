import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    productId: number,
    message: string,
    onDialogAnswer: Function,
}

export default function DialogConfirmation({ message, onDialogAnswer, productId }: Props) {

    return (
        <div className="devc-dialog-background" onClick={() => onDialogAnswer(false)}>
            <div className="devc-dialog-card" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="devc-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(true, productId)}>
                        <ButtonPrimary text="Sim" />
                    </div>
                    <div onClick={() => onDialogAnswer(false, productId)}>
                        <ButtonInverse text="Não" />
                    </div>
                </div>
            </div>
        </div>
    );
}