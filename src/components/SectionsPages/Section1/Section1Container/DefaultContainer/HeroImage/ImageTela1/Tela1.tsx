import {
  HeaderTela1,
  Boxes,
  Grafico,
} from "components/SectionsPages/Section1/Section1Container/DefaultContainer/HeroImage/ImageTela1/styled";

export function Tela1() {
  return (
    <>
      <HeaderTela1>
        <div className="cabeçalho">
          <img src="./images/char-Ellipse.svg" alt="" className="Avatar" />
          <p className="h1">
            {" "}
            Hello Sajeeb!
            <p className="subtitle">We hope you're having a great night.</p>
          </p>
        </div>

        <div className="Calendario">
          <img src="./images/Calendar.svg" alt="" className="img-0" />
          Today
          <img src="./images/chevron-down.svg" alt="" className="img-1" />
        </div>
      </HeaderTela1>

      <Boxes>
        <div className="box-1">
          <img src="./images/Activity.svg" alt="" className="box-1-img" />

          <div className="box-1-header">
            <p className="box-1-title">Total Revenue </p>
            <p className="box-1-Percentage">+15%</p>
          </div>

          <p className="box-1-info">$59,158</p>
        </div>

        <div className="box-2">
          
          <img src="./images/Document.svg" alt="" className="box-2-img" />
          <div className="box-2-header">
            <p className="box-2-title">Subscribers </p>
            <p className="box-2-Percentage">+11%</p>
          </div>
          <p className="box-2-info">2,984</p>
        </div>
        <div className="box-3">
          
          <img src="./images/Shield-Fail.svg" alt="" className="box-3-img" />
          <div className="box-3-header">
            <p className="box-3-title">Conversations </p>
            <p className="box-3-Percentage">-5%</p>
          </div>
          <p className="box-3-info">698 </p>
        </div>
        <div className="box-4">
          
          <img src="./images/Chart.svg" alt="" className="box-4-img" />
          <div className="box-4-header">
            <p className="box-4-title">Popup sales </p>
            <p className="box-4-Percentage">+15%</p>
          </div>
          <p className="box-4-info">$658</p>
        </div>
    
      </Boxes>
      <Grafico />
      
     
    </>
  );
}
