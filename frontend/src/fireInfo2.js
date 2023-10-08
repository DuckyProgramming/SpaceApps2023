import React from "react";
import "./App.css";

function FireInfo() {
    return (
        <div className="blackBack">
            <div className="limitedDiv">
            <p className="limitedWidth2">
            Humidity plays a crucial role in influencing the rates and behavior of fires. Generally, higher humidity levels indicate more moisture in the air, making it more difficult for fires to ignite and spread rapidly.
            </p>
            </div>
            <div className="limitedDiv">
            <p className="limitedWidth2">
            Higher temperatures increase the likelihood of ignition. As temperatures rise, the heat can reach a point where it's sufficient to ignite flammable materials like dry vegetation, wood, or other fuels present in the environment. 
            Warmer temperatures can accelerate the rate at which a fire spreads. Hotter air can heat and dry out vegetation, making it more susceptible to ignition. Increased temperature can also create convection currents that lift embers and flames, allowing the fire to spread more rapidly. 
            Higher temperatures lead to more intense fires. Increased heat enhances combustion, resulting in greater flame heights, higher energy release, and a more rapid consumption of fuels. Intense fires are harder to control and can cause more damage. 
            </p>
            </div>
            <div className="limitedDiv">
            <p className="limitedWidth2">
            Gas resistance is a measure of how much a gas impedes the flow of electric current. It’s a key parameter in gas sensors, which are devices that detect and identify different types of gases. 
            When certain gases come into contact with the sensor, they can either donate or accept electrons at the sensor’s surface, causing a change in the electrical resistance. 
            This change in resistance can be measured and used to determine the type and concentration of the gas. For example, in air quality monitoring, a spike decrease in resistance might indicate an increase in pollutants or volatile organic compounds (VOCs) which could potentially lead to fires, while an increase in resistance might indicate cleaner air. This may not be entirely acurate as the VOCs can vary with no specific amount per compound, but it is certainly a valuable factor when determining the percentage chance of a fire.
            </p>
            </div>
            <div className="limitedDiv">
            <p className="limitedWidth2">
            Air pressure affects the density of air, which, in turn, affects the availability of oxygen—an essential component for combustion. Higher air pressure increases the concentration of oxygen molecules, promoting more efficient and intense combustion, thus potentially leading to a faster rate of fire spread. 
            Adequate air pressure ensures a sufficient oxygen supply for the combustion process. Proper combustion leads to a more efficient use of the available fuel, potentially resulting in a more vigorous fire with a faster rate of combustion and spread.
            </p>
            </div>
            <div className="limitedDiv">
            <p className="limitedWidth2">
            In an open environment, the combustion process mainly involves the conversion of fuel and oxygen into heat, light, and various combustion products (such as carbon dioxide, water vapor, and other gases). While the gases produced during combustion can expand and create localized pressure variations, these effects are usually minor and tend to dissipate rapidly into the surrounding atmosphere. So, air pressure cannot be the main factor which determines fire, but it can be used as a confidence factor. 
            </p>
            </div>
        </div>

    );
}

export default FireInfo;
