import React, { FC } from "react";
import { ReactSVG } from "react-svg";

interface Props {
    name: string;
}

export const Icon: FC<Props> = ({ name }) => {
    return <ReactSVG src={`/icons/${name}.svg`} />;
};