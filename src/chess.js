import React from 'react';
import './chess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessPawn, faChessRook, faChessKnight, faChessBishop, faChessQueen, faChessKing } from '@fortawesome/free-solid-svg-icons';

function ChessBoard() {
  return (
    <div className="chess">
      <table>
        <tbody>
          <tr>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessRook} style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessKnight} style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessBishop} style={{ color: 'white',fontSize:'25px' }}/></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessQueen} style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessKing} style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessBishop} style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessKnight}  style={{ color: 'white',fontSize:'25px' }}/></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessRook} style={{ color: 'white',fontSize:'25px' }} /></td>
          </tr>
          <tr>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' ,fontSize:'25px'}} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn}style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white',fontSize:'25px' }}/></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' ,fontSize:'25px'}} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white',fontSize:'25px' }}/></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn}style={{ color: 'white',fontSize:'25px' }} /></td>
          </tr>
          <tr>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
          </tr>
          <tr>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
          </tr>
          <tr>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}></td>
          </tr>
          <tr>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black' ,fontSize:'25px'}} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black' ,fontSize:'25px'}} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessPawn} style={{ color: 'black' ,fontSize:'25px'}} /></td>
          </tr>
          <tr>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessRook} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessKnight} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessBishop} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessQueen} style={{ color: 'black' ,fontSize:'25px'}} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessKing} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessBishop} style={{ color: 'black',fontSize:'25px' }} /></td>
            <td style={{ backgroundColor: 'rgb(243, 201, 184)' }}><FontAwesomeIcon icon={faChessKnight} style={{ color: 'black' ,fontSize:'25px'}} /></td>
            <td style={{ backgroundColor: 'rgb(194, 68, 18)' }}><FontAwesomeIcon icon={faChessRook} style={{ color: 'black',fontSize:'25px' }} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ChessBoard;
