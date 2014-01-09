#include <windows.h>
#include <time.h>
#include <stdio.h>
//#include "CEFSimpleTypes.h"
#include "CEF_DLL_Structs.h"
//#using <CEFStructs.dll>


//stores the name of the window class
const char g_szClassName[] = "myWindowClass";

// Step 4: the Window Procedure
LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
    switch(msg)
    {
        case WM_CLOSE:
            DestroyWindow(hwnd);
        break;
        case WM_DESTROY:
            PostQuitMessage(0);
        break;
        default:
            return DefWindowProc(hwnd, msg, wParam, lParam);
    }
    return 0;
}

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow){
	/*
	HINSTANCE hInstance
		Handle to the programs executable module (the .exe file in memory) 
	HINSTANCE hPrevInstance
		Always NULL for Win32 programs. 
	LPSTR lpCmdLine
		The command line arguments as a single string. NOT including the program name. 
	int nCmdShow
		An integer value which may be passed to ShowWindow().
	
	**WIN32 Data Types (complete list at 	http://msdn.microsoft.com/en-us/library/windows/desktop/aa383751%28v=vs.85%29.aspx) **
	
	UINT 	= unsigned int
	DWORD 	= 32-bit unsigned int
	LPSTR 	= char*
	LPCSTR 	= constant string (cannot be modified)
	LPVOID	= a pointer to any type
	*/
	
	WNDCLASSEX wc;
    HWND hwnd;
    MSG Msg;

    //Step 1: Registering the Window Class
    wc.cbSize        = sizeof(WNDCLASSEX); 	//size of the structure
    wc.style         = 0;					//Class style
    wc.lpfnWndProc   = WndProc;				//pointer to the window procedure for this window class
    wc.cbClsExtra    = 0;					//extra data allocatd for this class in memory (usually 0)
    wc.cbWndExtra    = 0;					//extra data allocate in memory per window (usually 0)
    wc.hInstance     = hInstance;			//handle to the application instnace (first param of WinMain())
    wc.hIcon         = LoadIcon(NULL, IDI_APPLICATION);
											//icon shown when the user presses Alt+Tab
    wc.hCursor       = LoadCursor(NULL, IDC_ARROW);
											//cursor to be displayed over the window
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW+1);
											//background color of the window
    wc.lpszMenuName  = NULL;				//name of a menu resource to use for windows with this class
    wc.lpszClassName = g_szClassName;		//name to identify the class with
    wc.hIconSm       = LoadIcon(NULL, IDI_APPLICATION);
											//small icon shown in the top left corner of the window
	/* an if statement to catch any errors thrown from the above code */
	if(!RegisterClassEx(&wc))
    {
        MessageBox(NULL, "Window Registration Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }
	
	// Step 2: Creating the Window
	/*  
	HWND WINAPI CreateWindowEx(
		_In_      DWORD dwExStyle,	
		_In_opt_  LPCTSTR lpClassName,	*
		_In_opt_  LPCTSTR lpWindowName,
		_In_      DWORD dwStyle,
		_In_      int x,
		_In_      int y,
		_In_      int nWidth,
		_In_      int nHeight,
		_In_opt_  HWND hWndParent,
		_In_opt_  HMENU hMenu,
		_In_opt_  HINSTANCE hInstance,
		_In_opt_  LPVOID lpParam
			full description can be found at: http://msdn.microsoft.com/en-us/library/windows/desktop/ms632680%28v=vs.85%29.aspx
	);
		*_In_opt_ means you may pass a null to that param
		source-code annotation language
		http://msdn.microsoft.com/en-us/library/hh916383.aspx
	*/
    hwnd = CreateWindowEx(
        WS_EX_CLIENTEDGE,
        g_szClassName,
        "The title of my window",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, 
		CW_USEDEFAULT, 
		800, 
		600,
        NULL, 
		NULL, 
		hInstance, 
		NULL);

	/* again, an if statement to catch any errors */
    if(hwnd == NULL)
    {
        MessageBox(NULL, "Window Creation Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }
	/*
	BOOL WINAPI ShowWindow(
		_In_  HWND hWnd,
		_In_  int nCmdShow
	);
	http://msdn.microsoft.com/en-us/library/windows/desktop/ms633548%28v=vs.85%29.aspx
	*/
    ShowWindow(hwnd, nCmdShow);
	/*
	BOOL UpdateWindow(
		_In_  HWND hWnd
	);
	*/
    UpdateWindow(hwnd);

	// Step 3: The Message Loop
	/*
	BOOL WINAPI GetMessage(
		_Out_     LPMSG lpMsg,
		_In_opt_  HWND hWnd,
		_In_      UINT wMsgFilterMin,
		_In_      UINT wMsgFilterMax
	);
	*/
    while(GetMessage(&Msg, NULL, 0, 0) > 0)
    {
        TranslateMessage(&Msg);
        DispatchMessage(&Msg);
    }
    return Msg.wParam;
}
