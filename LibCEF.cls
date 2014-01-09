"Filed out from Dolphin Smalltalk X6"!

ExternalLibrary subclass: #LibCEF
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
LibCEF guid: (GUID fromString: '{32C5B859-9F9E-454F-B494-D2FBCA5AE102}')!
LibCEF comment: '#ifndef _CEF_APP_CAPI_H
#define _CEF_APP_CAPI_H

#ifdef __cplusplus
extern "C" {
#endif

#include "cef_base_capi.h"


///
// This function should be called on the main application thread to initialize
// CEF when the application is started. The |application| parameter may be NULL.
// A return value of true (1) indicates that it succeeded and false (0)
// indicates that it failed.
///
CEF_EXPORT int cef_initialize(const struct _cef_settings_t* settings,
    struct _cef_app_t* application);

///
// This function should be called on the main application thread to shut down
// CEF before the application exits.
///
CEF_EXPORT void cef_shutdown();

///
// Perform a single iteration of CEF message loop processing. This function is
// used to integrate the CEF message loop into an existing application message
// loop. Care must be taken to balance performance against excessive CPU usage.
// This function should only be called on the main application thread and only
// if cef_initialize() is called with a CefSettings.multi_threaded_message_loop
// value of false (0). This function will not block.
///
CEF_EXPORT void cef_do_message_loop_work();

///
// Run the CEF message loop. Use this function instead of an application-
// provided message loop to get the best balance between performance and CPU
// usage. This function should only be called on the main application thread and
// only if cef_initialize() is called with a
// CefSettings.multi_threaded_message_loop value of false (0). This function
// will block until a quit message is received by the system.
///
CEF_EXPORT void cef_run_message_loop();

///
// Quit the CEF message loop that was started by calling cef_run_message_loop().
// This function should only be called on the main application thread and only
// if cef_run_message_loop() was used.
///
CEF_EXPORT void cef_quit_message_loop();

///
// Implement this structure to provide handler implementations.
///
typedef struct _cef_app_t
{
  ///
  // Base structure.
  ///
  cef_base_t base;

  ///
  // Return the handler for proxy events. If not handler is returned the default
  // system handler will be used.
  ///
  struct _cef_proxy_handler_t* (CEF_CALLBACK *get_proxy_handler)(
      struct _cef_app_t* self);

} cef_app_t;


#ifdef __cplusplus
}
#endif

#endif // _CEF_APP_CAPI_H'!
!LibCEF categoriesForClass!Unclassified! !
!LibCEF methodsFor!

doMessageLoopWork
	"// Perform a single iteration of CEF message loop processing. This function is
// used to integrate the CEF message loop into an existing application message
// loop. Care must be taken to balance performance against excessive CPU usage.
// This function should only be called on the main application thread and only
// if cef_initialize() is called with a CefSettings.multi_threaded_message_loop
// value of false (0). This function will not block.

void cef_do_message_loop_work();
"

	<stdcall: void cef_do_message_loop_work>
	^self invalidCall!

initializeStruct: settings handle: application 
	"int cef_initialize(
		const struct _cef_settings_t* settings,
		struct _cef_app_t* application);"

	<stdcall: dword cef_initialize lpvoid handle>
	^self invalidCall!

quitMessageLoop
	"// Quit the CEF message loop that was started by calling cef_run_message_loop().
// This function should only be called on the main application thread and only
// if cef_run_message_loop() was used.
///
CEF_EXPORT void cef_quit_message_loop();"

	<stdcall: void cef_quit_message_loop>
	^self invalidCall!

runMessageLoop
	"///
	// Run the CEF message loop. Use this function instead of an application-
	// provided message loop to get the best balance between performance and CPU
	// usage. This function should only be called on the main application thread and
	// only if cef_initialize() is called with a
	// CefSettings.multi_threaded_message_loop value of false (0). This function
	// will block until a quit message is received by the system.
	

	CEF_EXPORT void cef_run_message_loop();"

	<stdcall: void cef_run_message_loop>
	^self invalidCall!

shutdownCEF
	"void cef_shutdown();"

	<stdcall: void cef_shutdown>
	^self invalidCall! !
!LibCEF categoriesFor: #doMessageLoopWork!operations!public! !
!LibCEF categoriesFor: #initializeStruct:handle:!operations!public! !
!LibCEF categoriesFor: #quitMessageLoop!operations!public! !
!LibCEF categoriesFor: #runMessageLoop!operations!public! !
!LibCEF categoriesFor: #shutdownCEF!operations!public! !

!LibCEF class methodsFor!

fileName
	^'libcef'! !
!LibCEF class categoriesFor: #fileName!public! !

