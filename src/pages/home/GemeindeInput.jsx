import React from "react";
import Select from "react-select";

export const GEMEINDEN = [
    { value: "Aadorf", label: "Aadorf" },
    { value: "Affeltrangen", label: "Affeltrangen" },
    { value: "Altnau", label: "Altnau" },
    { value: "Amlikon-Bissegg", label: "Amlikon-Bissegg" },
    { value: "Amriswil", label: "Amriswil" },
    { value: "Arbon", label: "Arbon" },
    { value: "Basadingen-Schlattingen", label: "Basadingen-Schlattingen" },
    { value: "Berg", label: "Berg" },
    { value: "Berlingen", label: "Berlingen" },
    { value: "Bettwiesen", label: "Bettwiesen" },
    { value: "Bichelsee-Balterswil", label: "Bichelsee-Balterswil" },
    { value: "Birwinken", label: "Birwinken" },
    { value: "Bischofszell", label: "Bischofszell" },
    { value: "Bottighofen", label: "Bottighofen" },
    { value: "Braunau", label: "Braunau" },
    { value: "Bussnang", label: "Bussnang" },
    { value: "Bürglen", label: "Bürglen" },
    { value: "Diessenhofen ", label: "Diessenhofen" },
    { value: "Dozwil ", label: "Dozwil" },
    { value: "Egnach ", label: "Egnach" },
    { value: "Erlen", label: "Erlen" },
    { value: "Ermatingen", label: "Ermatingen" },
    { value: "Eschenz", label: "Eschenz" },
    { value: "Eschlikon", label: "Eschlikon" },
    { value: "Felben-Wellhausen", label: "Felben-Wellhausen" },
    { value: "Fischingen", label: "Fischingen" },
    { value: "Frauenfeld", label: "Frauenfeld" },
    { value: "Gachnang", label: "Gachnang" },
    { value: "Gottlieben", label: "Gottlieben" },
    { value: "Güttingen", label: "Güttingen" },
    { value: "Hauptwil-Gottshaus", label: "Hauptwil-Gottshaus" },
    { value: "Hefenhofen ", label: "Hefenhofen" },
    { value: "Herdern ", label: "Herdern" },
    { value: "Hohentannen ", label: "Hohentannen" },
    { value: "Homburg", label: "Homburg" },
    { value: "Horn", label: "Horn" },
    { value: "Hüttlingen", label: "Hüttlingen" },
    { value: "Kemmental", label: "Kemmental" },
    { value: "Kesswil", label: "Kesswil" },
    { value: "Kradolf-Schönenberg", label: "Kradolf-Schönenberg" },
    { value: "Kreuzlingen", label: "Kreuzlingen" },
    { value: "Langrickenbach", label: "Langrickenbach" },
    { value: "Lengwil", label: "Lengwil" },
    { value: "Lommis", label: "Lommis" },
    { value: "Mammern", label: "Mammern" },
    { value: "Märstetten", label: "Märstetten" },
    { value: "Matzingen", label: "Matzingen" },
    { value: "Müllheim", label: "Müllheim" },
    { value: "Münchwilen", label: "Münchwilen" },
    { value: "Münsterlingen", label: "Münsterlingen" },
    { value: "Neunforn", label: "Neunforn" },
    { value: "Pfyn", label: "Pfyn" },
    { value: "Raperswilen", label: "Raperswilen" },
    { value: "Rickenbach", label: "Rickenbach" },
    { value: "Roggwil", label: "Roggwil" },
    { value: "Romanshorn", label: "Romanshorn" },
    { value: "Salenstein", label: "Salenstein" },
    { value: "Salmsach", label: "Salmsach" },
    { value: "Schlatt", label: "Schlatt" },
    { value: "Schönholzerswilen", label: "Schönholzerswilen" },
    { value: "Sirnach", label: "Sirnach" },
    { value: "Sommeri", label: "Sommeri" },
    { value: "Steckborn", label: "Steckborn" },
    { value: "Stettfurt", label: "Stettfurt" },
    { value: "Sulgen", label: "Sulgen" },
    { value: "Tägerwilen", label: "Tägerwilen" },
    { value: "Thundorf", label: "Thundorf" },
    { value: "Tobel-Tägerschen", label: "Tobel-Tägerschen" },
    { value: "Uesslingen-Buch", label: "Uesslingen-Buch" },
    { value: "Uttwil", label: "Uttwil" },
    { value: "Wagenhausen", label: "Wagenhausen" },
    { value: "Wäldi", label: "Wäldi" },
    { value: "Wängi", label: "Wängi" },
    { value: "Warth-Weiningen", label: "Warth-Weiningen" },
    { value: "Weinfelden", label: "Weinfelden" },
    { value: "Wigoltingen", label: "Wigoltingen" },
    { value: "Wigoltingen", label: "Wigoltingen" },
    { value: "Wilen", label: "Wilen" },
    { value: "Wuppenau", label: "Wuppenau" },
    { value: "Zihlschlacht-Sitterdorf", label: "Zihlschlacht-Sitterdorf" },
];

const GemeindeInput = ({ defaultValue, value, setValue }) => {
    return (
        <div className="">
            <span className="mb-0.5 text-sm font-semibold text-mute">
                Gemeinde
            </span>
            <Select
                className="w-full text-mute"
                defaultValue={defaultValue}
                options={GEMEINDEN}
                onChange={setValue}
                value={value}
            />
        </div>
    );
};

export default GemeindeInput;
