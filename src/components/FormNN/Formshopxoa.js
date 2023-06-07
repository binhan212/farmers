import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Formshopxoa() {
    const dispatch = useDispatch();
    const Func = useSelector((state) => state.ModalReducer.Func);
    const itemObj = useSelector((state) => state.ModalReducer.itemObj);

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{Func}</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">Bạn có thực sự muốn xóa không?</div>

            <div className="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                >
                    Đóng
                </button>
                <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => {
                        dispatch({
                            type: "XOA_SHOPNN",
                            ...itemObj,
                        });
                    }}
                >
                    Xóa
                </button>
            </div>
        </div>
    );
}
