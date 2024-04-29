import { render } from "vue";

export function signPopup(content,handler) {
    let divReal = document.createElement('div');

    let popup = <div class="cover">
        <div class="content">
            {content}
            <button onClick={() => {
                    document.body.removeChild(divReal);
                    handler.cancel && handler.cancel();
                }}>不同意</button>
            <button onClick={() => {
                    document.body.removeChild(divReal);
                    handler.confirm && handler.confirm();
                }}>同意</button>
        </div>
    </div>

    render(popup,divReal);
    document.body.appendChild(divReal)
}