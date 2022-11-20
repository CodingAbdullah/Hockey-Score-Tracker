import React from 'react';
import ANA from '../../public/images/nhl_logos/ana.gif';
import ARI from '../../public/images/nhl_logos/ari.gif';
import BOS from '../../public/images/nhl_logos/bos.gif';
import BUF from '../../public/images/nhl_logos/buf.gif';
import CAR from '../../public/images/nhl_logos/car.gif';
import CBJ from '../../public/images/nhl_logos/cbj.gif';
import CGY from '../../public/images/nhl_logos/cgy.gif';
import CHI from '../../public/images/nhl_logos/chi.gif';
import COL from '../../public/images/nhl_logos/col.gif';
import DAL from '../../public/images/nhl_logos/dal.gif';
import DET from '../../public/images/nhl_logos/det.gif';
import EDM from '../../public/images/nhl_logos/edm.gif';
import FLO from '../../public/images/nhl_logos/flo.gif';
import LAK from '../../public/images/nhl_logos/lak.gif';
import MIN from '../../public/images/nhl_logos/min.gif';
import MTL from '../../public/images/nhl_logos/mtl.gif';
import NJD from '../../public/images/nhl_logos/njd.gif';
import NSH from '../../public/images/nhl_logos/nsh.gif';
import NYI from '../../public/images/nhl_logos/nyi.gif';
import NYR from '../../public/images/nhl_logos/nyr.gif';
import OTT from '../../public/images/nhl_logos/ott.gif';
import PHI from '../../public/images/nhl_logos/phi.gif';
import PIT from '../../public/images/nhl_logos/pit.gif';
import SJS from '../../public/images/nhl_logos/sjs.gif';
import STL from '../../public/images/nhl_logos/stl.gif';
import TBL from '../../public/images/nhl_logos/tbl.gif';
import TOR from '../../public/images/nhl_logos/tor.gif';
import VAN from '../../public/images/nhl_logos/van.gif';
import VGK from '../../public/images/nhl_logos/vgk.gif';
import WPJ from '../../public/images/nhl_logos/wpj.gif';
import WSH from '../../public/images/nhl_logos/wsh.gif';
import '../LogoBox/logobox.css';

const LogoBox = (props) => {
   const capture = {
        'ana' : ANA, 'ari' : ARI, 'bos' : BOS, 'buf' : BUF, 'car' : CAR, 'cbj' : CBJ,
        'cgy' : CGY, 'chi' : CHI, 'col' : COL, 'dal' : DAL, 'det' : DET, 'edm' : EDM,
        'flo' : FLO, 'lak' : LAK, 'min' : MIN, 'mtl' : MTL, 'njd' : NJD, 'nsh' : NSH,
        'nyi' : NYI, 'nyr' : NYR, 'ott' : OTT, 'phi' : PHI, 'pit' : PIT, 'sjs' : SJS,
        'stl' : STL, 'tbl' : TBL, 'tor' : TOR, 'van' : VAN, 'vgk' : VGK, 'wpj' : WPJ,
        'wsh' : WSH 
    }
   
    const AWAY_LOGO = capture[props.awayTeam.trim()];
    const HOME_LOGO = capture[props.homeTeam.trim()];

    return (
        <div className="logoBox">
            <img src={AWAY_LOGO}  alt="No alternative" width="200" height="200" />
            <img src={HOME_LOGO}  alt="No alternative" width="200" height="200" />
        </div>
    )
}

export default LogoBox;