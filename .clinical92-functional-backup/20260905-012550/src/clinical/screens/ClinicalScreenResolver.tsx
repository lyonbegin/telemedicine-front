import React from 'react';
import type { ClinicalScreenSpec } from '../screenRegistry';
import { LoginScreen } from './LoginScreen';
import { PatientHomeScreen } from './PatientHomeScreen';
import { AppointmentScreen } from './AppointmentScreen';
import { ConsentScreen } from './ConsentScreen';
import { PrecheckScreen } from './PrecheckScreen';
import { LiveVisitScreen } from './LiveVisitScreen';
import { SiteDashboardScreen } from './SiteDashboardScreen';
import { ClinicianDashboardScreen } from './ClinicianDashboardScreen';
import { ViewerScreen } from './ViewerScreens';
import { GenericClinicalScreen } from './GenericClinicalScreen';

export function ClinicalScreenResolver({ screen }: { screen: ClinicalScreenSpec }) {
  switch(screen.code){
    case 'G01': return <LoginScreen/>;
    case 'P01': return <PatientHomeScreen/>;
    case 'P03': return <AppointmentScreen/>;
    case 'P07': return <ConsentScreen/>;
    case 'P13': return <PrecheckScreen/>;
    case 'P15': return <LiveVisitScreen/>;
    case 'S01': return <SiteDashboardScreen/>;
    case 'S09': return <PrecheckScreen/>;
    case 'S10': return <LiveVisitScreen/>;
    case 'C01': return <ClinicianDashboardScreen/>;
    case 'C05': return <LiveVisitScreen clinician/>;
    case 'C08': return <ViewerScreen kind="ECG"/>;
    case 'C09': return <ViewerScreen kind="DICOM"/>;
    case 'C10': return <ViewerScreen kind="ULTRASOUND"/>;
    case 'C11': return <ViewerScreen kind="AUSCULTATION"/>;
    case 'C12': return <ViewerScreen kind="LAB"/>;
    default: return <GenericClinicalScreen screen={screen}/>;
  }
}
