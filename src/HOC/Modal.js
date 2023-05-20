import React from 'react'
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";

export default function Modal() {
  
  let Component=useSelector(state=>state.ModalReducer.Component);

  return (
    <div>
  <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
        {Component}
    </div>
  </div>
</div>

  )
}
