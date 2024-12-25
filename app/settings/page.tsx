'use client';

import React, { useState } from 'react';
import { Save, Store, Bell, Shield } from 'lucide-react';

const SettingsPage = () => {
  const [storeSettings, setStoreSettings] = useState({
    storeName: '',
    contactEmail: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStoreSettings(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simpan data ke backend atau API endpoint
      const response = await fetch('/api/save-settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(storeSettings)
      });
      
      if (response.ok) {
        // Berhasil menyimpan data
        alert('Settings saved successfully!');
      } else {
        // Gagal menyimpan data
        alert('Failed to save settings. Please try again.');
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="h-full overflow-auto p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        {/* Store Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Store className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-800">Store Settings</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Store Name
              </label>
              <input
                type="text"
                name="storeName"
                value={storeSettings.storeName}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                value={storeSettings.contactEmail}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={storeSettings.phoneNumber}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={storeSettings.address}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-800">Notification Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Order Notifications</p>
                <p className="text-sm text-gray-600">Receive notifications for new orders</p>
              </div>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Review Notifications</p>
                <p className="text-sm text-gray-600">Receive notifications for new reviews</p>
              </div>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-gray-800">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                New Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
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

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button type="submit" className="btn btn-primary flex items-center gap-2">
            <Save className="h-5 w-5" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
