import React, { useState } from 'react';
import fakeData from '../../demoData'
import PackageDataShow from '../PackageDataShaow/PackageDataShow';

const LoadPackageData = (props) => {
    const data = fakeData;
    const [packages, setPackages] = useState(data);
    return (
        <div className="container">
            {
                packages.map(packageData => <PackageDataShow key={packageData.key} addCard={props.addCard} packageData={packageData} />)
            }
        </div>
    )
}

export default LoadPackageData
