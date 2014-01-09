//CEFDLLStructs

#include <stdlib.h>
#define bool int

/*
** A list of all the structs used in the LibCef.dll **
cef_string_t 		--
cef_url_parts_t		--
cef_thread_id_t		--
cef_settings_t		--
cef_app_t			--
cef_task_t			?? cef_post_task
cef_v8handler_t		?? cef_register_extension
*/
/*
cef_proxy_handler_t			-?
cef_string_list_t			-?
log_severity				--
graphics_implementation		--
cef_base_t					-?
*/

enum cef_thread_id_t {
  TID_UI      = 0,
  TID_IO      = 1,
  TID_FILE    = 2,
};

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

typedef wchar_t char16_t;
typedef struct _cef_string_utf16_t {
  char16_t* str;
  size_t length;
  void (*dtor)(char16_t* str);
} cef_string_utf16_t;
typedef cef_string_utf16_t cef_string_t; 

typedef void* cef_string_list_t;

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

//cefCallback found in cef_callback.h
typedef struct _cef_base_t {
  size_t size;
  int (CEF_CALLBACK *add_ref)(struct _cef_base_t* self);
  int (CEF_CALLBACK *release)(struct _cef_base_t* self);
  int (CEF_CALLBACK *get_refct)(struct _cef_base_t* self);
} cef_base_t;

typedef struct _cef_app_t {
  cef_base_t base;
  struct _cef_proxy_handler_t* (CEF_CALLBACK *get_proxy_handler)(
      struct _cef_app_t* self);
} cef_app_t;

typedef struct _cef_proxy_handler_t {
  cef_base_t base;
  void (CEF_CALLBACK *get_proxy_for_url)(struct _cef_proxy_handler_t* self,
      const cef_string_t* url, struct _cef_proxy_info_t* proxy_info);
} cef_proxy_handler_t;
