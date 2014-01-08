#include <stddef.h>
#define bool int

//Definition of the required CEF types

typedef enum {
  ANGLE_IN_PROCESS = 0,
  ANGLE_IN_PROCESS_COMMAND_BUFFER,
  DESKTOP_IN_PROCESS,
  DESKTOP_IN_PROCESS_COMMAND_BUFFER
} cef_graphics_implementation_t ;

typedef enum  {
  LOGSEVERITY_DEFAULT,
  LOGSEVERITY_VERBOSE,
  LOGSEVERITY_INFO,
  LOGSEVERITY_WARNING,
  LOGSEVERITY_ERROR,
  LOGSEVERITY_ERROR_REPORT,
  LOGSEVERITY_DISABLE = 99
} cef_log_severity_t;

typedef struct _cef_urlparts_t {
  cef_string_t spec;
  cef_string_t scheme;
  cef_string_t username;
  cef_string_t password;
  cef_string_t host;
  cef_string_t port;
  cef_string_t path;
  cef_string_t query;
} cef_urlparts_t;

typedef struct _cef_string_utf8_t {
  char* str;
  size_t length;
  void (*dtor)(char* str);
} cef_string_utf8_t;

typedef cef_string_utf8_t cef_string_t; 
typedef void* cef_string_list_t;

typedef struct _cef_settings_t {
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
} cef_settings_t;

//exported function signatures

cef_settings_t getBasicCEFSettings();
cef_string_t getCefString(char *);
char *testHelloWorld();

//int main only used for testing

int main(){
	cef_string_t test = getCefString("from this string");
	printf(test.str);
	getBasicCEFSettings();
	printf("ran without errors\n");
	printf(testHelloWorld());
	return 0;
}

//the exported functions

__declspec ( dllexport ) cef_string_t getCefString(char *stringLiteral){
	printf("testing cef string\n");
	cef_string_t newCEFString = {0};
	newCEFString.str = stringLiteral;
	newCEFString.length = sizeof(stringLiteral);
	return newCEFString;
}

__declspec ( dllexport ) cef_settings_t getBasicCEFSettings(){
	printf("testing cef settings\n");
	cef_settings_t newCEFSettings = {0};
	newCEFSettings.size = sizeof(cef_settings_t);
	newCEFSettings.multi_threaded_message_loop = 0; //explicitly setting it to false
	return newCEFSettings;
}

__declspec ( dllexport ) cef_urlparts_t getURLParts(){
	cef_urlparts_t newURLParts = {0};
	return newURLParts;
}

__declspec ( dllexport ) char *testHelloWorld(){
	return "Hello World";
}
