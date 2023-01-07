import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
    const [state, setState] = useState({
        scale: "c",
        temperature: 0,
    });

    const onChangeTemperature = (obj) => {
        setState({ ...state, scale: obj.scale, temperature: obj.temperature });
    };

    const toCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) * 5) / 9;
    };

    const toFahrenheit = (celsius) => {
        return (celsius * 9) / 5 + 32;
    };

    const tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return "";
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;

        return rounded.toString();
    };

    const { scale, temperature } = state;

    const celsius = scale === "f" ? tryConvert(state.temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(state.temperature, toFahrenheit) : temperature;

    return (
        <>
            <TemperatureInput scale={"c"} temperature={celsius} handlerTemperatureOnChange={onChangeTemperature} />
            <TemperatureInput scale={"f"} temperature={fahrenheit} handlerTemperatureOnChange={onChangeTemperature} />
        </>
    );
}
