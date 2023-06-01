// import React, { useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { saveAs } from 'file-saver';
// import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// export default function DHCT1() {
//   const CTDHs = useSelector((state) => state.ModalReducer.itemArr);
//   const Func = useSelector((state) => state.ModalReducer.Func);

//   const handlePrint = () => {
//     const MyDocument = () => (
//       <Document>
//         <Page size="A4">
//           <View>
//             {/* Your content here */}
//             {CTDHs.map((CTDH, index) => (
//               <View key={index} style={styles.row}>
//                 <Text>{CTDH.maCTDH}</Text>
//                 <Text>{CTDH.sanPham.tenSP}</Text>
//                 {/* ... and so on */}
//               </View>
//             ))}
//           </View>
//         </Page>
//       </Document>
//     );

//     const blob = MyDocument.toBlob();
//     saveAs(blob, 'emp-data.pdf');
//     alert('In thành công!');
//   };

//   return (
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title">{Func}</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         <table className="table table-hover my-0">
//           <thead>
//             <tr>
//               <th className="d-none d-xl-table-cell">Mã CTDH</th>
//               <th className="d-none d-xl-table-cell">Tên sản phẩm</th>
//               {/* ... and so on */}
//             </tr>
//           </thead>
//           <tbody>
//             {CTDHs.map((CTDH, index) => {
//               return (
//                 <tr key={index}>
//                   <td className="d-none d-xl-table-cell">{CTDH.maCTDH}</td>
//                   <td className="d-none d-xl-table-cell">{CTDH.sanPham.tenSP}</td>
//                   {/* ... and so on */}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div className="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">
//           Đóng
//         </button>
//         <button type="button" class="btn btn-primary" onClick={handlePrint}>
//           Lưu/Xuất
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//     padding: 5,
//   },
// });
