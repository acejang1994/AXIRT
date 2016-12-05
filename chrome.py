# Chrome App Module for NVDA
# Michael Bocamazo
# Within Chrome, On a keybinding press, write a note about an element, and post it to a forum

import appModuleHandler
import tones
import os
import ui
import versionInfo
import api
import speech
from logHandler import log
import globalVars
import codecs

def send_report_message(self, message):
	"""Send the error report to the forum"""
	pass

def save_report_message(message):
	"""Save the error message to local log"""
	log_text = codecs.open(globalVars.appArgs.logFileName,'r',encoding = 'UTF-8').read()
	f = file('C:\\Users\\mbocamazo\\Desktop\\report_log.txt','a')
	f.write(message+"\n")
	f.write(log_text)
	f.close()

def replace_missing(name):
	if name is None:
		return "Missing Name"
	else:
		return name

# def p(x):
# 	if x.parent is not None:
# 		return [x.name] + p(x.parent)
# 	else
# 		return [x.name]


class AppModule(appModuleHandler.AppModule):

	# def event_gainFocus(self, obj, nextHandler):
	# 	tones.beep(550, 50)
	# 	nextHandler()

	def script_reportLinkTitle(self, gesture):
		tones.beep(700, 50)		
		script_message = "Link title missing or incorrect on "
		
		# all same from here
		nav = api.getNavigatorObject()
		nav_name = "Navigator Name: " + replace_missing(nav.name) + "\n"
		versionInfo = "Product Version Info: " + replace_missing(nav.appModule.productName) + ' ' + replace_missing(nav.appModule.productVersion) + "\n"
		object_name = replace_missing(api.getFocusObject().name)
		object_hier_names = "Focus Object Hierarchy: " + ', '.join([replace_missing(x.name) for x in api.getFocusAncestors()]) + "\n"		
		message = script_message + object_name + "\n"
		ui.message(message)
		report_message = message + object_hier_names + nav_name + versionInfo + "Developer info for navigator object:\n%s" % "\n".join(nav.devInfo)
		save_report_message(report_message)

	def script_reportAltText(self, gesture):
		tones.beep(800, 50)		
		script_message = "Alt Text missing or incorrect on "
		nav = api.getNavigatorObject()
		nav_name = "Navigator Name: " + replace_missing(nav.name) + "\n"
		versionInfo = "Product Version Info: " + replace_missing(nav.appModule.productName) + ' ' + replace_missing(nav.appModule.productVersion) + "\n"
		object_name = replace_missing(api.getFocusObject().name)
		object_hier_names = "Focus Object Hierarchy: " + ', '.join([replace_missing(x.name) for x in api.getFocusAncestors()]) + "\n"		
		message = script_message + object_name + "\n"
		ui.message(message)
		report_message = message + object_hier_names + nav_name + versionInfo + "Developer info for navigator object:\n%s" % "\n".join(nav.devInfo)
		save_report_message(report_message)
		
	def script_reportHierarchyFormat(self, gesture):
		tones.beep(900, 50)		
		script_message = "Incorrect or misleading formatting on "
		nav = api.getNavigatorObject()
		nav_name = "Navigator Name: " + replace_missing(nav.name) + "\n"
		versionInfo = "Product Version Info: " + replace_missing(nav.appModule.productName) + ' ' + replace_missing(nav.appModule.productVersion) + "\n"
		object_name = replace_missing(api.getFocusObject().name)
		object_hier_names = "Focus Object Hierarchy: " + ', '.join([replace_missing(x.name) for x in api.getFocusAncestors()]) + "\n"		
		message = script_message + object_name + "\n"
		ui.message(message)
		report_message = message + object_hier_names + nav_name + versionInfo + "Developer info for navigator object:\n%s" % "\n".join(nav.devInfo)
		save_report_message(report_message)

	def script_reportOther(self, gesture):
		tones.beep(1000, 50)	
		script_message = "Accessibility issue on "	
		nav = api.getNavigatorObject()
		nav_name = "Navigator Name: " + replace_missing(nav.name) + "\n"
		versionInfo = "Product Version Info: " + replace_missing(nav.appModule.productName) + ' ' + replace_missing(nav.appModule.productVersion) + "\n"
		object_name = replace_missing(api.getFocusObject().name)
		object_hier_names = "Focus Object Hierarchy: " + ', '.join([replace_missing(x.name) for x in api.getFocusAncestors()]) + "\n"		
		message = script_message + object_name + "\n"
		ui.message(message)
		report_message = message + object_hier_names + nav_name + versionInfo + "Developer info for navigator object:\n%s" % "\n".join(nav.devInfo)
		save_report_message(report_message)

	__gestures={
		"kb:NVDA+a": "reportAltText",
		"kb:NVDA+l": "reportLinkTitle",
		"kb:NVDA+h": "reportHierarchyFormat",
		"kb:NVDA+z": "reportOther",
	}
