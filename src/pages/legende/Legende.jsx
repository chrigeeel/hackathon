import React from "react";

const Legende = () => {
    return (
        <div className="flex h-min w-full max-w-4xl flex-col gap-4 p-4 font-semibold">
            <p className="text-green-600">
                A steht für "ausgezeichnet" Gemeinden, die in diesem Bereich des
                Nachhaltigkeitsindex platziert sind, haben einen hervorragenden
                Energieverbrauch und eine Produktion von nachhaltiger Energie
                sowie sehr niedrige CO2-Emissionen. Sie engagieren sich auch
                aktiv in Förderprogrammen zur Förderung von Nachhaltigkeit.
            </p>
            <div className="h-0.5 w-full bg-mute"></div>
            <p className="text-lime-400">
                B steht für "gut" Gemeinden, die in diesem Bereich des
                Nachhaltigkeitsindex platziert sind, haben einen guten
                Energieverbrauch und eine Produktion von nachhaltiger Energie
                sowie niedrige CO2-Emissionen. Sie engagieren sich auch aktiv in
                Förderprogrammen zur Förderung von Nachhaltigkeit, haben jedoch
                noch Raum für Verbesserungen.
            </p>
            <div className="h-0.5 w-full bg-mute"></div>

            <p className="text-yellow-400">
                C steht für "durchschnittlich" Gemeinden, die in diesem Bereich
                des Nachhaltigkeitsindex platziert sind, haben einen
                durchschnittlichen Energieverbrauch und eine Produktion von
                nachhaltiger Energie sowie moderate CO2-Emissionen. Sie
                beteiligen sich auch an Förderprogrammen zur Förderung von
                Nachhaltigkeit, müssen jedoch noch mehr tun, um ihre
                Nachhaltigkeitsziele zu erreichen.
            </p>
            <div className="h-0.5 w-full bg-mute"></div>

            <p className="text-orange-500">
                D steht für "unterdurchschnittlich" Gemeinden, die in diesem
                Bereich des Nachhaltigkeitsindex platziert sind, haben einen
                höheren Energieverbrauch und eine geringere Produktion von
                nachhaltiger Energie sowie höhere CO2-Emissionen. Sie beteiligen
                sich möglicherweise an einigen Förderprogrammen zur Förderung
                von Nachhaltigkeit, aber ihre Anstrengungen reichen nicht aus,
                um ihre Auswirkungen auf die Umwelt zu minimieren.
            </p>
            <div className="h-0.5 w-full bg-mute"></div>

            <p className="text-red-500">
                E steht für "schlecht" Unternehmen und Organisationen, die in
                diesem Bereich des Nachhaltigkeitsindex platziert sind, haben
                einen sehr hohen Energieverbrauch und eine geringe Produktion
                von nachhaltiger Energie sowie sehr hohe CO2-Emissionen. Sie
                beteiligen sich möglicherweise nicht an Förderprogrammen zur
                Förderung von Nachhaltigkeit oder ihre Anstrengungen sind
                unzureichend, um ihre negativen Auswirkungen auf die Umwelt
                auszugleichen
            </p>
        </div>
    );
};

export default Legende;
