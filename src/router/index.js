import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/dashboard/Index'
import alert from '@/components/Report/alert'
import amctracking from '@/components/Report/amctracking'
import appointmentsvisit from '@/components/Report/appointmentsvisit'
import appointments from '@/components/Report/appointments'
import automatedmeasure from '@/components/Report/automatedmeasure'
import blankpage from '@/components/pages/blankpage'
import calendar from '@/components/Application/calendar'
import changepassword from '@/components/settings/changepassword'
import chat from '@/components/Messages/chat'
import clientlist from '@/components/Report/clientlist'
import clientrx from '@/components/Report/clientrx'
import clinicalreport from '@/components/Report/clinicalreport'
import components from '@/components/pages/components'
import createvisit from '@/components/patients/createvisit'
import datatables from '@/components/tables/datatables'
import deleteaccount from '@/components/settings/deleteaccount'
import druginventory from '@/components/Report/druginventory'
import electronicsreport from '@/components/procedures/electronicsreport'
import error404 from '@/components/pages/error404'
import error500 from '@/components/pages/error500'
import expensecategory from '@/components/Report/expensecategory'
import flowboardrecord from '@/components/Report/flowboardrecord'
import flowboard from '@/components/Report/flowboard'
import forgotpassword from '@/components/pages/forgotpassword'
import formbasicinputs from '@/components/pages/formbasicinputs'
import formhorizontal from '@/components/pages/formhorizontal'
import forminputgroups from '@/components/pages/forminputgroups'
import formmask from '@/components/pages/formmask'
import formvalidation from '@/components/pages/formvalidation'
import formvertical from '@/components/pages/formvertical'
import immunizationregistry from '@/components/Report/immunizationregistry'
import inbox from '@/components/Application/inbox'
import invoice from '@/components/patients/invoice'
import labdocument from '@/components/procedures/labdocument'
import lockscreen from '@/components/pages/lockscreen'
import login from '@/components/pages/login'
import mapsvector from '@/components/pages/mapsvector'
import notifications from '@/components/settings/notifications'
import patientlist from '@/components/Report/patientlist'
import patientsdata from '@/components/patients/patientsdata'
import patientsdocument from '@/components/patients/patientsdocument'
import patientshistory from '@/components/patients/patientshistory'
import patientissues from '@/components/patients/patientissues'
import patientsprofile from '@/components/patients/patientsprofile'
import patientsreport from '@/components/patients/patientsreport'
import patientsresults from '@/components/patients/patientsresults'
import patientstransactions from '@/components/patients/patientstransactions'
import patients from '@/components/Application/patients'
import pendingorders from '@/components/Report/pendingorders'
import pendingreview from '@/components/patients/pendingreview'
import preferences from '@/components/settings/preferences'
import profile from '@/components/pages/profile'
import qualitymeasures from '@/components/Report/qualitymeasures'
import recallboard from '@/components/Application/recallboard'
import referalsreport from '@/components/Report/referalsreport'
import register from '@/components/pages/register'
import reportresults from '@/components/Report/reportresults'
import settings from '@/components/Application/settings'
import standardmeasures from '@/components/Report/standardmeasures'
import tablesbasic from '@/components/tables/tablesbasic'
import taxtypes from '@/components/settings/taxtypes'
import uniqueinsurance from '@/components/Report/uniqueinsurance'
import users from '@/components/Application/users'
import visithistory from '@/components/patients/visithistory'
Vue.use(Router)
const router = new Router({
  mode: 'history', 
  base: 'vuejs', 
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'indexx',
      component: Index
    },
    {
      path: '/alert-log',
      name: 'alert-log',
      component: alert
    },
    {
      path: '/amc-tracking',
      name: 'amc-tracking',
      component: amctracking
    },
    {
      path: '/appointments-visit',
      name: 'appointments-visit',
      component: appointmentsvisit
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: appointments
    },
    {
      path: '/automated-measures',
      name: 'automated-measures',
      component: automatedmeasure
    },
    {
      path: '/blank-page',
      name: 'blank-page',
      component: blankpage
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: changepassword
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/client-list',
      name: 'client-list',
      component: clientlist
    },
    {
      path: '/client-rx',
      name: 'client-rx',
      component: clientrx
    },
    {
      path: '/clinical-report',
      name: 'clinical-report',
      component: clinicalreport
    },
     {
      path: '/components',
      name: 'components',
      component: components
    },
    {
      path: '/create-visit',
      name: 'create-visit',
      component: createvisit
    },
    {
      path: '/data-tables',
      name: 'data-tables',
      component: datatables
    },
    {
      path: '/delete-account',
      name: 'delete-account',
      component: deleteaccount
    },
    {
      path: '/drug-inventory',
      name: 'drug-inventory',
      component: druginventory
    },
    {
      path: '/electronics-report',
      name: 'electronics-report',
      component: electronicsreport
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: error404
    },
    {
      path: '/error-500',
      name: 'error-500',
      component: error500
    },
    {
      path: '/expense-category',
      name: 'expense-category',
      component: expensecategory
    },
    {
      path: '/flow-board-record',
      name: 'flow-board-record',
      component: flowboardrecord
    },
    {
      path: '/flow-board',
      name: 'flow-board',
      component: flowboard
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: forgotpassword
    },
    {
      path: '/form-basic-inputs',
      name: 'form-basic-inputs',
      component: formbasicinputs
    },
     {
      path: '/form-horizontal',
      name: 'form-horizontal',
      component: formhorizontal
    },
     {
      path: '/form-input-groups',
      name: 'form-input-groups',
      component: forminputgroups
    },
    {
      path: '/form-mask',
      name: 'form-mask',
      component: formmask
    },
    {
      path: '/form-validation',
      name: 'form-validation',
      component: formvalidation
    },
    {
      path: '/form-vertical',
      name: 'form-vertical',
      component: formvertical
    },
    {
      path: '/immunization-registry',
      name: 'immunization-registry',
      component: immunizationregistry
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: inbox
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: invoice
    },
     {
      path: '/lab-documents',
      name: 'lab-documents',
      component: labdocument
    },
    {
      path: '/lock-screen',
      name: 'lock-screen',
      component: lockscreen
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/maps-vector',
      name: 'maps-vector',
      component: mapsvector
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications
    },
    {
      path: '/patient-list',
      name: 'patient-list',
      component: patientlist
    },
     {
      path: '/patients-data',
      name: 'patients-data',
      component: patientsdata
    },
    {
      path: '/patients-documents',
      name: 'patients-documents',
      component: patientsdocument
    },
    {
      path: '/patients-history',
      name: 'patients-history',
      component: patientshistory
    },
    {
      path: '/patients-issues',
      name: 'patients-issues',
      component: patientissues
    },
    {
      path: '/patients-profile',
      name: 'patients-profile',
      component: patientsprofile
    },
    {
      path: '/patients-report',
      name: 'patients-report',
      component: patientsreport
    },
    {
      path: '/patients-results',
      name: 'patients-results',
      component: patientsresults
    },
    {
      path: '/patients-transactions',
      name: 'patients-transactions',
      component: patientstransactions
    },
    {
      path: '/patients',
      name: 'patients',
      component: patients
    },
    {
      path: '/pending-orders',
      name: 'pending-orders',
      component: pendingorders
    },
    {
      path: '/pending-review',
      name: 'pending-review',
      component: pendingreview
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: preferences
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/quality-measures',
      name: 'quality-measures',
      component: qualitymeasures
    },
    {
      path: '/recall-board',
      name: 'recall-board',
      component: recallboard
    },
    {
      path: '/referals-report',
      name: 'referals-report',
      component: referalsreport
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/report-results',
      name: 'report-results',
      component: reportresults
    },
     {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/standard-measures',
      name: 'standard-measures',
      component: standardmeasures
    },
    {
      path: '/tables-basic',
      name: 'tables-basic',
      component: tablesbasic
    },
     {
      path: '/tax-types',
      name: 'tax-types',
      component: taxtypes
    },
    {
      path: '/unique-insurance',
      name: 'unique-insurance',
      component: uniqueinsurance
    },
     {
      path: '/users',
      name: 'users',
      component: users
    },
     {
      path: '/visit-history',
      name: 'visit-history',
      component: visithistory
    }
  ],
  linkActiveClass: "active",
})
export default router