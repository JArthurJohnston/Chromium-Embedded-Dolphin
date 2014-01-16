| package |
package := Package name: 'Chromium Embedded'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #CEFSettings;
	add: #CEFString;
	add: #LibCEF;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\..\..\..\Users\Arthur\Documents\Dolphin Smalltalk X6\Object Arts\Dolphin\Base\Dolphin';
	yourself).

package!

"Class Definitions"!

ExternalLibrary subclass: #LibCEF
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ExternalStructure subclass: #CEFSettings
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ExternalStructure subclass: #CEFString
	instanceVariableNames: 'len'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

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
	^self invalidCall!

stringWide: src length: src_len ToUTF16: output 
	"
CEF_EXPORT int cef_string_wide_to_utf16(
	const wchar_t* src, 
	size_t src_len,
	cef_string_utf16_t* output
);
"

	<stdcall: byte cef_string_wide_to_utf16 lpwstr byte CEFString*>
	^self invalidCall! !
!LibCEF categoriesFor: #doMessageLoopWork!operations!public! !
!LibCEF categoriesFor: #initializeStruct:handle:!operations!public! !
!LibCEF categoriesFor: #quitMessageLoop!operations!public! !
!LibCEF categoriesFor: #runMessageLoop!operations!public! !
!LibCEF categoriesFor: #shutdownCEF!operations!public! !
!LibCEF categoriesFor: #stringWide:length:ToUTF16:!public! !

!LibCEF class methodsFor!

fileName
	^'libcef'! !
!LibCEF class categoriesFor: #fileName!public! !

CEFSettings guid: (GUID fromString: '{D70ECC44-32CB-49E1-B591-8FC92AD40EF5}')!
CEFSettings comment: 'typedef struct _cef_settings_t {
     
     Size of this structure.
     
  size_t size;

     
     Set to true (1) to have the message loop run in a separate thread. If
     false (0) than the CefDoMessageLoopWork() function must be called from
     your application message loop.
     
  bool multi_threaded_message_loop;

     
     The location where cache data will be stored on disk. If empty an
     in-memory cache will be used. HTML5 databases such as localStorage will
     only persist across sessions if a cache path is specified.
     
  cef_string_t cache_path;

     
     Value that will be returned as the User-Agent HTTP header. If empty the
     default User-Agent string will be used.
     
  cef_string_t user_agent;

     
     Value that will be inserted as the product portion of the default
     User-Agent string. If empty the Chromium product version will be used. If
     |userAgent| is specified this value will be ignored.
     
  cef_string_t product_version;

     
     The locale string that will be passed to WebKit. If empty the default
     locale of "en-US" will be used. This value is ignored on Linux where locale
     is determined using environment variable parsing with the precedence order:
     LANGUAGE, LC_ALL, LC_MESSAGES and LANG.
     
  cef_string_t locale;

     
     List of fully qualified paths to plugins (including plugin name) that will
     be loaded in addition to any plugins found in the default search paths.
     
  cef_string_list_t extra_plugin_paths;

     
     The directory and file name to use for the debug log. If empty, the
     default name of "debug.log" will be used and the file will be written
     to the application directory.
     
  cef_string_t log_file;

     
     The log severity. Only messages of this severity level or higher will be
     logged.
     
  cef_log_severity_t log_severity;

     
     Enable DCHECK in release mode to ease debugging.
     
  bool release_dcheck_enabled;

     
     The graphics implementation that CEF will use for rendering GPU accelerated
     content like WebGL, accelerated layers and 3D CSS.
     
  cef_graphics_implementation_t graphics_implementation;

     
     Quota limit for localStorage data across all origins. Default size is 5MB.
     
  unsigned int local_storage_quota;

     
     Quota limit for sessionStorage data per namespace. Default size is 5MB.
     
  unsigned int session_storage_quota;

     
     Custom flags that will be used when initializing the V8 JavaScript engine.
     The consequences of using custom flags may not be well tested.
     
  cef_string_t javascript_flags;

#if defined(OS_WIN)
     
     Set to true (1) to use the system proxy resolver on Windows when
     "Automatically detect settings" is checked. This setting is disabled
     by default for performance reasons.
     
  bool auto_detect_proxy_settings_enabled;
#endif

     
     The fully qualified path for the resources directory. If this value is
     empty the chrome.pak and or devtools_resources.pak files must be located in
     the module directory on Windows Linux or the app bundle Resources directory
     on Mac OS X.
     
  cef_string_t resources_dir_path;

     
     The fully qualified path for the locales directory. If this value is empty
     the locales directory must be located in the module directory. This value
     is ignored on Mac OS X where pack files are always loaded from the app
     bundle Resources directory.
     
  cef_string_t locales_dir_path;

     
     Set to true (1) to disable loading of pack files for resources and locales.
     A resource bundle handler must be provided for the browser and renderer
     processes via CefApp::GetResourceBundleHandler() if loading of pack files
     is disabled.
     
  bool pack_loading_disabled;

     
     The number of stack trace frames to capture for uncaught exceptions.
     Specify a positive value to enable the CefV8ContextHandler::
     OnUncaughtException() callback. Specify 0 (default value) and
     OnUncaughtException() will not be called.
     
  int uncaught_exception_stack_size;

     
     By default CEF V8 references will be invalidated (the IsValid() method will
     return false) after the owning context has been released. This reduces the
     need for external record keeping and avoids crashes due to the use of V8
     references after the associated context has been released.
    
     CEF currently offers two context safety implementations with different
     performance characteristics. The default implementation (value of 0) uses a
     map of hash values and should provide better performance in situations with
     a small number contexts. The alternate implementation (value of 1) uses a
     hidden value attached to each context and should provide better performance
     in situations with a large number of contexts.
    
     If you need better performance in the creation of V8 references and you
     plan to manually track context lifespan you can disable context safety by
     specifying a value of -1.
     
  int context_safety_implementation;
} cef_settings_t;'!
!CEFSettings categoriesForClass!Unclassified! !
!CEFSettings class methodsFor!

defineFields
	"typedef struct _cef_settings_t {
		size_t size;
		bool multi_threaded_message_loop;
		cef_string_t cache_path;
		cef_string_t user_agent;
		cef_string_t product_version;
		cef_string_t locale;
		cef_string_list_t extra_plugin_paths;
		cef_string_t log_file;
		cef_log_severity_t log_severity;
		bool release_dcheck_enabled;
		cef_graphics_implementation_t graphics_implementation;
		unsigned int local_storage_quota;
		unsigned int session_storage_quota;
		cef_string_t javascript_flags;
		#if defined(OS_WIN)
			bool auto_detect_proxy_settings_enabled;
		#endif
		cef_string_t resources_dir_path;
		cef_string_t locales_dir_path;
		bool pack_loading_disabled;
		int uncaught_exception_stack_size;
		int context_safety_implementation;
	} cef_settings_t;"

	self
		beUncompiled;
		defineField: #size type: DWORDField new;
		defineField: #multi_threaded_message_loop type: BOOLField new;
		defineField: #cache_path type: (PointerField to: String);
		defineField: #user_agent type: (PointerField to: String);
		defineField: #product_version type: (PointerField to: String);
		defineField: #locale type: (PointerField to: String);
		defineField: #extra_plugin_paths type: (PointerField to: String);
		defineField: #log_file type: (PointerField to: String);
		defineField: #log_severity type: (PointerField to: String);
		defineField: #release_dcheck_enabled type: BOOLField new;
		defineField: #graphics_implementation type: (PointerField to: String);
		defineField: #local_storage_quota type: DWORDField new;
		defineField: #javascript_flags type: (PointerField to: String);
		defineField: #auto_detect_proxy_settings_enabled type: BOOLField new;
		defineField: #resources_dir_path type: (PointerField to: String);
		defineField: #locales_dir_path type: (PointerField to: String);
		defineField: #pack_loading_disabled type: BOOLField new;
		defineField: #uncaught_exception_stack_size type: (PointerField to: String);
		defineField: #context_safety_implementation type: (PointerField to: String)! !
!CEFSettings class categoriesFor: #defineFields!development!public! !

CEFString guid: (GUID fromString: '{96B3F167-1ED1-429F-B1CE-49D40FD8B6C7}')!
CEFString comment: ''!
!CEFString categoriesForClass!Unclassified! !
!CEFString methodsFor!

dtor
	"Answer the receiver's dtor field as a Smalltalk object."

	^(bytes dwordAtOffset: 8) asExternalAddress!

dtor: anObject
	"Set the receiver's dtor field to the value of anObject."

	bytes dwordAtOffset: 8 put: anObject!

length
	"Answer the receiver's length field as a Smalltalk object."

	^(bytes dwordAtOffset: 4)!

length: anObject
	"Set the receiver's length field to the value of anObject."

	bytes dwordAtOffset: 4 put: anObject!

str
	"Answer the receiver's str field as a Smalltalk object."

	^UnicodeString fromAddress: (bytes sdwordAtOffset: 0)!

str: anObject
	"Set the receiver's str field to the value of anObject."

	bytes dwordAtOffset: 0 put: anObject yourAddress! !
!CEFString categoriesFor: #dtor!**compiled accessors**!public! !
!CEFString categoriesFor: #dtor:!**compiled accessors**!public! !
!CEFString categoriesFor: #length!**compiled accessors**!public! !
!CEFString categoriesFor: #length:!**compiled accessors**!public! !
!CEFString categoriesFor: #str!**compiled accessors**!public! !
!CEFString categoriesFor: #str:!**compiled accessors**!public! !

!CEFString class methodsFor!

defineFields
	"
typedef struct _cef_string_utf16_t {
	char16* str;
	size_t length;
	void (*dtor)(char16* str);
} cef_string_utf16_t;

	self compileDefinition
"

	self
		defineField: #str type: (PointerField type: UnicodeString);
		defineField: #length type: DWORDField new;
		defineField: #dtor type: LPVOIDField filler

	"a good example of a function in a struct can be found in EXCEPINFO >> defineFields"!

newFromString: aString 
	| output |
	output := CEFString new.
	LibCEF default 
		cefStringSet: aString asUnicodeString
		size: aString asUnicodeString size
		output: output
		copy: 1.
	^output! !
!CEFString class categoriesFor: #defineFields!public! !
!CEFString class categoriesFor: #newFromString:!public! !

"Binary Globals"!

