import React from "react";
import { Save, Store, Bell, Shield } from "lucide-react";

const SettingsPage = () => {
  return (
    
    <div className="h-full overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Store Settings */}
        <div className="bg-base-100 rounded-lg shadow">
          <div className="p-6 border-b border-base-300">
            <div className="flex items-center gap-2 mb-4">
              <Store className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Store Settings</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {" "}
              {/* Mengubah grid menjadi satu kolom */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Store Name
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  defaultValue=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  defaultValue=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  defaultValue=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Address
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows={5}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="p-6 border-b border-base-300">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Notification Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Order Notifications</p>
                  <p className="text-sm text-base-content/70">
                    Receive notifications for new orders
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Review Notifications</p>
                  <p className="text-sm text-base-content/70">
                    Receive notifications for new reviews
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  defaultChecked
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Security Settings</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="btn btn-primary flex items-center gap-2">
          <Save className="h-5 w-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;