import React from 'react'
import BaseLinks from './componets/Footer components/BaseLinks'
import DontMiss from './componets/Footer components/DontMiss'
import LinksTable from "./componets/Footer components/LinksTable";
import WaysToPay from './componets/Footer components/WaysToPay'

const Footer = () => {
  return (
		<div>
			<DontMiss />
			<WaysToPay />
			<LinksTable />
			<BaseLinks />
		</div>
  );
}

export default Footer