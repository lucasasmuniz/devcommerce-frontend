import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string,
    onDialogAnswer: Function,
}

export default function DialogConfirmation({ message, onDialogAnswer }: Props) {

    return (
        <div className="devc-dialog-background" onClick={() => onDialogAnswer(false)}>
            <div className="devc-dialog-card" onClick={(event) => event.stopPropagation()}>
                <h2>{message}</h2>
                <div className="devc-dialog-btn-container">
                    <div onClick={() => onDialogAnswer(true)}>
                        <ButtonPrimary text="Sim" />
                    </div>
                    <div onClick={() => onDialogAnswer(false)}>
                        <ButtonInverse text="Não" />
                    </div>
                </div>
            </div>
        </div>
    );
}