import React, { Component } from "react";

class TextWidget extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fontSize: 30
    };
		this.handleScroll = this.handleScroll.bind(this);
		this.scrollPos = 0;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { fontSize } = this.state;
    const minFontSize = 30;
    let newFontsize = 0;

    if (document.body.getBoundingClientRect().top > this.scrollPos) {
      newFontsize = fontSize - 1 > minFontSize ? fontSize - 1 : minFontSize;
      this.setState({
        fontSize: newFontsize
      });
    } else if (document.body.getBoundingClientRect().top < this.scrollPos) {
      newFontsize = fontSize + 1;
      this.setState({
        fontSize: newFontsize
      });
		}

    this.scrollPos = document.body.getBoundingClientRect().top;
  }

  render() {
    return (
      <p style={{ fontSize: this.state.fontSize }}>
        Lorem ipsum dolor sit amet, tollit possit est in, in prompta bonorum
        appareat sit, et vidisse deleniti mei. Cu inermis adipisci interpretaris
        mea, per vocibus aliquando ea, sea dicit quodsi volumus te. Pro primis
        labore ponderum eu, ex eius nobis his, id vim epicurei erroribus. Duo
        tollit laudem molestiae in, vero platonem vis ea. Nam alii graecis ex.
        Porro molestie has te. In eum liber albucius expetendis, sit ne dicat
        efficiendi. Putant commodo propriae est at, possim persius ex his, cum
        cu alia tibique commune. Vim labitur accusam et. Posse aeque eam at, eum
        te liber saepe nominavi, mel omnes scripta no. Quo ex iudicabit
        patrioque dissentias, te sit munere postea maiorum, eu vidit apeirian
        eum. Usu tation argumentum in, mei te esse consequat liberavisse. Vel ne
        quidam fastidii gubergren, ne sea zril fabulas mediocritatem, errem
        possit voluptua sed at. Sea te nulla vocent tincidunt, placerat
        postulant sadipscing vis ei. Et vidisse fastidii facilisis vim. In
        quodsi appetere probatus sea, hinc vivendum definitionem eam an. Sed an
        debitis patrioque. Dicit iriure definiebas vel an, iuvaret fierent pri
        an. Sea cibo dicta mollis no. Sonet quidam interpretaris te mea, vide
        noster gloriatur ex qui, clita consul laudem ea ius. Aperiri deserunt
        moderatius eu eum, sint omnis eligendi vel in, veniam percipit mei te.
        In soluta efficiantur eos, percipit eloquentiam comprehensam vix an. Et
        brute laboramus dissentiet vis. Mel facer lucilius periculis id, in sed
        porro reprimique percipitur, oratio labitur ceteros ad usu. Case aeterno
        labitur an qui, ex dico nulla partiendo est. Lorem ipsum dolor sit amet,
        tollit possit est in, in prompta bonorum appareat sit, et vidisse
        deleniti mei. Cu inermis adipisci interpretaris mea, per vocibus
        aliquando ea, sea dicit quodsi volumus te. Pro primis labore ponderum
        eu, ex eius nobis his, id vim epicurei erroribus. Duo tollit laudem
        molestiae in, vero platonem vis ea. Nam alii graecis ex. Porro molestie
        has te. In eum liber albucius expetendis, sit ne dicat efficiendi.
        Putant commodo propriae est at, possim persius ex his, cum cu alia
        tibique commune. Vim labitur accusam et. Posse aeque eam at, eum te
        liber saepe nominavi, mel omnes scripta no. Quo ex iudicabit patrioque
        dissentias, te sit munere postea maiorum, eu vidit apeirian eum. Usu
        tation argumentum in, mei te esse consequat liberavisse. Vel ne quidam
        fastidii gubergren, ne sea zril fabulas mediocritatem, errem possit
        voluptua sed at. Sea te nulla vocent tincidunt, placerat postulant
        sadipscing vis ei. Et vidisse fastidii facilisis vim. In quodsi appetere
        probatus sea, hinc vivendum definitionem eam an. Sed an debitis
        patrioque. Dicit iriure definiebas vel an, iuvaret fierent pri an. Sea
        cibo dicta mollis no. Sonet quidam interpretaris te mea, vide noster
        gloriatur ex qui, clita consul laudem ea ius. Aperiri deserunt
        moderatius eu eum, sint omnis eligendi vel in, veniam percipit mei te.
        In soluta efficiantur eos, percipit eloquentiam comprehensam vix an. Et
        brute laboramus dissentiet vis. Mel facer lucilius periculis id, in sed
        porro reprimique percipitur, oratio labitur ceteros ad usu. Case aeterno
        labitur an qui, ex dico nulla partiendo est. Lorem ipsum dolor sit amet,
        tollit possit est in, in prompta bonorum appareat sit, et vidisse
        deleniti mei. Cu inermis adipisci interpretaris mea, per vocibus
        aliquando ea, sea dicit quodsi volumus te. Pro primis labore ponderum
        eu, ex eius nobis his, id vim epicurei erroribus. Duo tollit laudem
        molestiae in, vero platonem vis ea. Nam alii graecis ex. Porro molestie
        has te. In eum liber albucius expetendis, sit ne dicat efficiendi.
        Putant commodo propriae est at, possim persius ex his, cum cu alia
        tibique commune. Vim labitur accusam et. Posse aeque eam at, eum te
        liber saepe nominavi, mel omnes scripta no. Quo ex iudicabit patrioque
        dissentias, te sit munere postea maiorum, eu vidit apeirian eum. Usu
        tation argumentum in, mei te esse consequat liberavisse. Vel ne quidam
        fastidii gubergren, ne sea zril fabulas mediocritatem, errem possit
        voluptua sed at. Sea te nulla vocent tincidunt, placerat postulant
        sadipscing vis ei. Et vidisse fastidii facilisis vim. In quodsi appetere
        probatus sea, hinc vivendum definitionem eam an. Sed an debitis
        patrioque. Dicit iriure definiebas vel an, iuvaret fierent pri an. Sea
        cibo dicta mollis no. Sonet quidam interpretaris te mea, vide noster
        gloriatur ex qui, clita consul laudem ea ius. Aperiri deserunt
        moderatius eu eum, sint omnis eligendi vel in, veniam percipit mei te.
        In soluta efficiantur eos, percipit eloquentiam comprehensam vix an. Et
        brute laboramus dissentiet vis. Mel facer lucilius periculis id, in sed
        porro reprimique percipitur, oratio labitur ceteros ad usu. Case aeterno
        labitur an qui, ex dico nulla partiendo est. Lorem ipsum dolor sit amet,
        tollit possit est in, in prompta bonorum appareat sit, et vidisse
        deleniti mei. Cu inermis adipisci interpretaris mea, per vocibus
        aliquando ea, sea dicit quodsi volumus te. Pro primis labore ponderum
        eu, ex eius nobis his, id vim epicurei erroribus. Duo tollit laudem
        molestiae in, vero platonem vis ea. Nam alii graecis ex. Porro molestie
        has te. In eum liber albucius expetendis, sit ne dicat efficiendi.
        Putant commodo propriae est at, possim persius ex his, cum cu alia
        tibique commune. Vim labitur accusam et. Posse aeque eam at, eum te
        liber saepe nominavi, mel omnes scripta no. Quo ex iudicabit patrioque
        dissentias, te sit munere postea maiorum, eu vidit apeirian eum. Usu
        tation argumentum in, mei te esse consequat liberavisse. Vel ne quidam
        fastidii gubergren, ne sea zril fabulas mediocritatem, errem possit
        voluptua sed at. Sea te nulla vocent tincidunt, placerat postulant
        sadipscing vis ei. Et vidisse fastidii facilisis vim. In quodsi appetere
        probatus sea, hinc vivendum definitionem eam an. Sed an debitis
        patrioque. Dicit iriure definiebas vel an, iuvaret fierent pri an. Sea
        cibo dicta mollis no. Sonet quidam interpretaris te mea, vide noster
        gloriatur ex qui, clita consul laudem ea ius. Aperiri deserunt
        moderatius eu eum, sint omnis eligendi vel in, veniam percipit mei te.
        In soluta efficiantur eos, percipit eloquentiam comprehensam vix an. Et
        brute laboramus dissentiet vis. Mel facer lucilius periculis id, in sed
        porro reprimique percipitur, oratio labitur ceteros ad usu. Case aeterno
        labitur an qui, ex dico nulla partiendo est.
      </p>
    );
  }
}

export default TextWidget;
