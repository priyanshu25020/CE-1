'use client';

import { 
  User, Building2, Globe, Moon, Clock, Calendar, 
  LayoutDashboard, ListOrdered, RefreshCw, ChevronRight, 
  ChevronDown, Lock, Download, Database, Camera, LogOut
} from 'lucide-react';

export default function SettingsWorkspace() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mt-2">
      
      {/* 1. LEFT COLUMN: General Settings & Preferences */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        
        {/* General Settings Block */}
        <div className="flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white tracking-wide">General Settings</h2>
            <p className="text-xs text-slate-400 mt-1">Manage basic information and preferences</p>
          </div>

          <div className="flex flex-col gap-2">
            
            {/* Profile Information */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Profile Information</span>
                  <span className="text-xs text-slate-400 mt-0.5">Update your personal information and profile picture</span>
                </div>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
                Edit Profile <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Institution Information */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Institution Information</span>
                  <span className="text-xs text-slate-400 mt-0.5">View and manage institution details</span>
                </div>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
                View Details <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="w-full h-px bg-white/[0.05] my-2"></div>

            {/* Language */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Language</span>
                  <span className="text-xs text-slate-400 mt-0.5">Choose your preferred language</span>
                </div>
              </div>
              <button className="flex items-center gap-6 px-4 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs font-medium text-white hover:border-white/20 transition-colors whitespace-nowrap min-w-[140px] justify-between">
                English <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Theme */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Moon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Theme</span>
                  <span className="text-xs text-slate-400 mt-0.5">Choose your preferred theme</span>
                </div>
              </div>
              <div className="flex items-center bg-[#0F121D] border border-white/[0.05] rounded-xl p-1">
                <button className="px-4 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors">Light</button>
                <button className="px-4 py-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-medium shadow-lg">Dark</button>
                <button className="px-4 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors">System</button>
              </div>
            </div>

            {/* Timezone */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-orange-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Timezone</span>
                  <span className="text-xs text-slate-400 mt-0.5">Set your local timezone</span>
                </div>
              </div>
              <button className="flex items-center gap-6 px-4 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs font-medium text-white hover:border-white/20 transition-colors whitespace-nowrap min-w-[220px] justify-between">
                (GMT+05:30) Asia/Kolkata <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Date Format */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-pink-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Date Format</span>
                  <span className="text-xs text-slate-400 mt-0.5">Choose your preferred date format</span>
                </div>
              </div>
              <button className="flex items-center gap-6 px-4 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs font-medium text-white hover:border-white/20 transition-colors whitespace-nowrap min-w-[220px] justify-between">
                May 20, 2025 (MM DD, YYYY) <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Time Format */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Time Format</span>
                  <span className="text-xs text-slate-400 mt-0.5">Choose your preferred time format</span>
                </div>
              </div>
              <div className="flex items-center bg-[#0F121D] border border-white/[0.05] rounded-xl p-1">
                <button className="px-6 py-1.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-medium shadow-lg">12 Hour</button>
                <button className="px-6 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors">24 Hour</button>
              </div>
            </div>

          </div>
        </div>

        {/* Preferences Block */}
        <div className="flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-white tracking-wide">Preferences</h2>
            <p className="text-xs text-slate-400 mt-1">Customize your experience</p>
          </div>

          <div className="flex flex-col gap-2">
            
            {/* Default Dashboard */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <LayoutDashboard className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Default Dashboard</span>
                  <span className="text-xs text-slate-400 mt-0.5">Choose which dashboard you want to see on login</span>
                </div>
              </div>
              <button className="flex items-center gap-6 px-4 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs font-medium text-white hover:border-white/20 transition-colors whitespace-nowrap min-w-[200px] justify-between">
                Mentor Dashboard <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Items Per Page */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <ListOrdered className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Items Per Page</span>
                  <span className="text-xs text-slate-400 mt-0.5">Select default number of items to display</span>
                </div>
              </div>
              <button className="flex items-center gap-6 px-4 py-2 bg-[#0F121D] border border-white/[0.05] rounded-xl text-xs font-medium text-white hover:border-white/20 transition-colors whitespace-nowrap min-w-[200px] justify-between">
                10 Items <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Auto Refresh */}
            <div className="flex items-center justify-between p-3 hover:bg-white/[0.02] rounded-xl transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">Auto Refresh</span>
                  <span className="text-xs text-slate-400 mt-0.5">Automatically refresh data on dashboard</span>
                </div>
              </div>
              {/* Custom Toggle Switch */}
              <div className="relative inline-flex items-center cursor-pointer ml-4">
                <div className="w-10 h-5 bg-indigo-600 rounded-full transition-colors flex items-center px-0.5">
                   <div className="w-4 h-4 bg-white rounded-full shadow-md transform translate-x-5 transition-transform duration-300"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 2. RIGHT COLUMN: Profile, Actions & System Info */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        
        {/* Profile Preview */}
        <div className="flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl p-6">
          <h3 className="text-sm font-bold text-white mb-5">Profile Preview</h3>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Prof&backgroundColor=4f46e5" alt="Prof. Sharma" className="w-16 h-16 rounded-full bg-slate-800 border-2 border-white/10" />
              <button className="absolute bottom-0 right-0 p-1 bg-slate-700 hover:bg-slate-600 border border-slate-800 rounded-full text-white transition-colors">
                <Camera className="w-3 h-3" />
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-bold text-white">Prof. Sharma</span>
                <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-medium rounded">Mentor</span>
              </div>
              <span className="text-xs text-slate-400 mb-0.5">CE-A • 80 Students</span>
              <span className="text-xs text-slate-500">mentor@ldrp.ac.in</span>
            </div>
          </div>
        </div>

        {/* Quick Actions (Without Manage Sessions) */}
        <div className="flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl p-6">
          <h3 className="text-sm font-bold text-white mb-5">Quick Actions</h3>
          <div className="flex flex-col gap-2">
            
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] cursor-pointer transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-pink-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">Change Password</span>
                  <span className="text-[11px] text-slate-500">Update your account password</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] cursor-pointer transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Download className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">Export My Data</span>
                  <span className="text-[11px] text-slate-500">Download your account data</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.02] cursor-pointer transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                  <Database className="w-4 h-4 text-orange-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">Backup & Restore</span>
                  <span className="text-[11px] text-slate-500">Backup or restore system data</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>

          </div>
        </div>

        {/* System Information */}
        <div className="flex flex-col bg-[#111827]/80 backdrop-blur-xl rounded-[20px] border border-white/[0.05] shadow-2xl p-6">
          <h3 className="text-sm font-bold text-white mb-5">System Information</h3>
          
          <div className="flex flex-col gap-4 mb-6 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Version</span>
              <span className="text-slate-200 font-medium">v2.4.1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Last Updated</span>
              <span className="text-slate-200 font-medium">May 18, 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">System Status</span>
              <span className="text-emerald-400 font-medium">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Uptime</span>
              <span className="text-slate-200 font-medium">99.9%</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-500/30 text-red-500 hover:bg-red-500/10 text-sm font-medium transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>

        </div>
      </div>

    </div>
  );
}